/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import '@material/mwc-icon';

import {MobxLitElement} from '@adobe/lit-mobx';
import {css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {computed, makeObservable, observable} from 'mobx';

import {styles} from './app.css';

interface Dataset {
  label: string;
  filename: string;
}

interface Cluster {
  index: number;
  count: number;
  frequent_terms: string[];
}

interface Dimension {
  field_name: string;
  label: string;
  values: string[];
  counts: {[key: string]: number};
}

interface DataResponse {
  submissions: any[];
  sessions: any[];
  clusters: Cluster[];
  dimensions: Dimension[];
}

/**
 * Root component for the app.
 */
@customElement('nibbler-vis-app')
export class NibberVisualizationAppElement extends MobxLitElement {
  static override get styles() {
    return [styles, css``];
  }
  
  @observable submissions: any[] = [];
  @observable selectedSubmissions: any[] = [];

  @observable sessions: any[] = [];
  @observable sessionVisibleCount = 50;

  @observable onlySubmitted = true;
  @observable searchQuery = '';

  @observable clusters: Cluster[] = [];
  @observable expandCluster: number|null = null;

  @observable dimensions: Dimension[] = [];
  @observable
  selectedDimensions: {[key: string]: string|null} = {'prompt': null};

  @observable dataLoaded = false;

  @observable datasets: Dataset[] = [];
  @observable datasetIndex = 0;

  private numSimilarImages = 10;
  private ngramDisplayCount = 10;

  constructor() {
    super();
    makeObservable(this);

    this.loadData();
  }

  // Load the json data file.
  private async loadData() {
    this.datasets = (window as any).datasets as Dataset[] || [];

    // Get url parameters.
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params: {[key: string]: string} = {};
    for (const [key, value] of urlSearchParams) {
      params[key] = decodeURIComponent(value);
    }

    if (params.hasOwnProperty('datasetIndex')) {
      this.datasetIndex = parseInt(params['datasetIndex']) ?? 0;
    }

    let dataResponse: DataResponse =
        {submissions: [], sessions: [], clusters: [], dimensions: []};
    
    // This is the released dataset for Adversarial Nibbler.
    const filename = this.datasets[this.datasetIndex].filename;
    const response = await fetch(`./data/${filename}`);
    dataResponse = await response.json();

    this.submissions = dataResponse.submissions;
    this.submissions.forEach((submission) => {
      submission.marked = true;
    });

    this.sessions = dataResponse.sessions;

    this.clusters = dataResponse.clusters;

    this.dimensions = dataResponse.dimensions;
    this.dimensions.forEach((dimension) => {
      this.selectedDimensions[dimension.field_name] = null;
    });

    this.dataLoaded = true;
  }

  // List the submissions.
  @computed
  get filteredSubmissions(): any[] {
    let submissions = this.submissions;

    // Search filters.
    if (this.searchQuery !== '') {
      submissions = submissions.filter(
          (submission) => submission.prompt.toLowerCase().includes(
              this.searchQuery.toLowerCase()));
    }

    // Dimension filters.
    Object.keys(this.selectedDimensions).forEach((dimensionName: string) => {
      const selectedValue = this.selectedDimensions[dimensionName];
      if (selectedValue != null) {
        submissions = submissions.filter((submission) => {
          const value = submission[dimensionName];
          if (value instanceof Array) {
            return value.includes(selectedValue);
          } else {
            return value === selectedValue;
          }
        });
      }
    });
    return submissions;
  }

  @computed
  get exampleFiltered(): boolean[] {
    return this.submissions.map((submission) => {
      let marked = true;

      if (this.searchQuery !== '') {
        if (!submission.prompt.toLowerCase().includes(
                this.searchQuery.toLowerCase())) {
          marked = false;
        }
      }

      Object.keys(this.selectedDimensions).forEach((dimensionName: string) => {
        const selectedValue = this.selectedDimensions[dimensionName];
        if (selectedValue != null) {
          const value = submission[dimensionName];
          if (value instanceof Array) {
            if (!value.includes(selectedValue)) {
              marked = false;
            }
          } else {
            if (value !== selectedValue) {
              marked = false;
            };
          }
        }
      });
      return marked;
    });
  }

  @computed
  get anyFiltered(): boolean {
    return this.exampleFiltered.map((val: boolean) => val === false ? 1 : 0)
               .reduce((acc: number, val: number) => acc + val, 0) > 0;
  }

  @computed
  get dimensionsForFilteredExamples() {
    // Get dimension list.
    const dimensionCounts = Object.fromEntries(
        this.dimensions
            .filter((dimension: any) => dimension.field_name !== 'prompt')
            .map((dimension: any) => [dimension.field_name, dimension.counts]));
    const dimensionNames = Object.keys(dimensionCounts);

    // Reset counts.
    dimensionNames.forEach((dimensionName: string) => {
      dimensionCounts[dimensionName] =
          Object.fromEntries(Object.keys(dimensionCounts[dimensionName])
                                 .map((fieldName: string) => [fieldName, 0]));
    });

    // Count for filtered examples.
    this.filteredSubmissions.forEach((ex: any) => {
      dimensionNames.forEach((dimensionName: string) => {
        const dimensionValue = ex[dimensionName];
        if (dimensionValue instanceof Array) {
          dimensionValue.forEach((value: string) => {
            dimensionCounts[dimensionName][value] += 1;
          });
        } else {
          dimensionCounts[dimensionName][dimensionValue] += 1;
        }
      });
    });

    return this.dimensions
        .filter((dimension: any) => dimension.field_name !== 'prompt')
        .map((dimension: any) => {
          return {
            field_name: dimension.field_name, label: dimension.label,
                values: dimension.values,
                counts: dimensionCounts[dimension.field_name],
          }
        });
  }

  @computed
  get allSessionsButConsiderOnlySubmitted(): any[] {
    return this.sessions.filter(
        (session) => this.onlySubmitted === true ?
            session.is_submitted_count > 0 :
            true);
  }

  @computed
  get filteredSessions(): any[] {
    let sessions = this.allSessionsButConsiderOnlySubmitted;

    if (this.searchQuery !== '') {
      sessions = sessions.filter(
          (session) => session.prompt.toLowerCase().includes(
              this.searchQuery.toLowerCase()));
    }

    if (this.expandCluster != null) {
      const submissionImageHashes =
          this.submissions
              .filter(
                  (submission) =>
                      submission.cluster_label === this.expandCluster)
              .map((submission) => submission.image_hashed_filename);
      sessions = sessions.filter(
          (session) => session.image_hashed_filenames
                           .filter(
                               (filename: string) =>
                                   submissionImageHashes.includes(filename))
                           .length > 0);
    }

    Object.keys(this.selectedDimensions)
        .filter((dimensionName: string) => dimensionName !== 'prompt')
        .forEach((dimensionName: string) => {
          const selectedValue = this.selectedDimensions[dimensionName];
          if (selectedValue != null) {
            sessions = sessions.filter((session) => {
              const value = session[dimensionName];
              if (value instanceof Array) {
                return value.includes(selectedValue);
              } else {
                return value === selectedValue;
              }
            });
          }
        });

    return sessions;
  }

  @computed
  get topUnigramsForAll() {
    const allNgrams: string[] =
        this.allSessionsButConsiderOnlySubmitted
            .map((session) => [...new Set(session.prompt_unigrams)] as string[])
            .flat();

    const ngramCounts: {[key: string]: number} =
        allNgrams.reduce((acc, ngram: string) => {
          acc[ngram] = (acc[ngram] || 0) + 1;
          return acc;
        }, {} as {[key: string]: number});
    return Object.fromEntries(Object.entries(ngramCounts));
  }

  @computed
  get topUnigrams() {
    const topUnigramsForAll = this.topUnigramsForAll;

    const filteredSessions = this.filteredSessions;

    const allNgrams: string[] =
        filteredSessions
            .map((session) => [...new Set(session.prompt_unigrams)] as string[])
            .flat();
    const ngramCounts: {[key: string]: number} =
        allNgrams.reduce((acc, ngram: string) => {
          acc[ngram] = (acc[ngram] || 0) + 1;
          return acc;
        }, {} as {[key: string]: number});

    const ngramPMIs: {[key: string]: number} = {};
    const instanceCount = this.allSessionsButConsiderOnlySubmitted.length;
    for (const [ngram, count] of Object.entries(ngramCounts)) {
      const bgCount = topUnigramsForAll[ngram];
      const pWC = count / filteredSessions.length;
      const pW = bgCount /
          Object.values(topUnigramsForAll)
              .reduce((acc: number, val: number) => acc + val, 0);
      const pC = filteredSessions.length / instanceCount;
      const pmi = Math.log10(pWC / (pW * pC));
      ngramPMIs[ngram] = pWC < 1.0 ? pmi / (-Math.log10(pWC)) : pmi / 0.000001;
    }

    return Object.keys(ngramPMIs)
        .sort((a: string, b: string) => ngramPMIs[b] - ngramPMIs[a])
        .slice(0, this.ngramDisplayCount);
  }

  @computed
  get topBigrams() {
    const filteredSessions = this.filteredSessions;

    const allNgrams: string[] =
        filteredSessions.map((session) => session.prompt_bigrams as string[])
            .flat();
    const ngramCounts: {[key: string]: number} =
        allNgrams.reduce((acc, ngram: string) => {
          acc[ngram] = (acc[ngram] || 0) + 1;
          return acc;
        }, {} as {[key: string]: number});

    return Object.keys(ngramCounts)
        .sort((a: string, b: string) => ngramCounts[b] - ngramCounts[a])
        .slice(0, this.ngramDisplayCount);
  }

  @computed
  get filterChips(): any[] {
    return Object.keys(this.selectedDimensions)
        .map(
            (dimensionName: string) =>
                [dimensionName, this.selectedDimensions[dimensionName]])
        .filter(([dimensionName, value]) => value != null)
        .map(([dimensionName, value]) => {
          return {dimensionName, value};
        });
  }

  @computed
  get filterChipsWithoutPrompts(): any[] {
    return [
      ...(this.searchQuery !== '' ?
              [{dimensionName: 'Prompt', value: this.searchQuery}] :
              []),
      ...(this.expandCluster != null ?
              [
                {
                  dimensionName: 'Image Cluster',
                  value: this.clusters.length - this.expandCluster
                }
              ] :
              []),
      ...Object.keys(this.selectedDimensions)
          .map(
              (dimensionName: string) =>
                  [dimensionName, this.selectedDimensions[dimensionName]])
          .filter(([dimensionName, value]) => dimensionName !== 'prompt')
          .filter(([dimensionName, value]) => value != null)
          .map(([dimensionName, value]) => {
            return {dimensionName, value};
          })
    ];
  }

  private renderFilterChips(withoutPrompts: boolean) {
    const handleClickRemove = (chipItem: any) => {
      if (chipItem.dimensionName === 'Prompt') {
        this.searchQuery = '';
      } else if (chipItem.dimensionName === 'Image Cluster') {
        this.expandCluster = null;
      } else {
        this.selectedDimensions[chipItem.dimensionName] = null;
      }
    };
    const appliedFilters =
        (withoutPrompts === true ? this.filterChipsWithoutPrompts :
                                   this.filterChips)
            .map(
                (chipItem: any) => html`
                      <li class="filter-chip">
                        ${chipItem.dimensionName} ${
                    chipItem.dimensionName !== 'Prompt' ?
                        '=' :
                        'contains'} "${chipItem.value}"
                        <span class="remove"
                          @click=${() => void handleClickRemove(chipItem)}>
                          x
                        </span>
                      </li>`);

    const handleClearAll = () => {
      this.dimensions.forEach((dimension) => {
        this.selectedDimensions[dimension.field_name] = null;
      });
      this.selectedDimensions['prompt'] = null;
      this.searchQuery = '';
      this.selectedSubmissions = [];
      this.expandCluster = null;
    };

    const clearAll = html`
        <li>
          <button class="clear-all" @click=${handleClearAll}>Clear All</button>
        </li>`;

    return appliedFilters.length > 0 ?
        html`<li class="first">Filters:</li>${appliedFilters}${clearAll}` :
        html`<li class="first">Filters: None</li>`;
  }

  private renderClusters() {
    if (this.dataLoaded === false) {
      return html`Loading...`;
    }

    const renderClusterList =
      this.clusters.slice()
        .sort((a, b) => b.index - a.index)
        .map((cluster, index) => {
          const submissionsForCluster = this.submissions.filter(
              submission => submission.cluster_label === cluster.index);
          const styleImage = (submission: any) => classMap({
            'image-container': true,
            'hidden': !this.exampleFiltered[submission.index],
          });
          const styleImages = styleMap({
            'height': this.expandCluster === cluster.index ? 'auto' : '82px',
            'width': this.expandCluster === cluster.index ? '336px' : '168px'
          });
          const styleTerms = styleMap({
            'width': this.expandCluster === cluster.index ? '338px' : '170px'
          });
          const filteredCount =
              submissionsForCluster
                  .map((submission: any) =>
                    this.exampleFiltered[submission.index] === true ? 1 : 0)
                  .reduce((acc: number, val: number) => acc + val, 0);

          const renderSubmissionsForCluster =
            submissionsForCluster.map((submission) => {
              return html`
                <div class=${styleImage(submission)}>
                  ${submission.hasOwnProperty('image_base64') ?
                    html`
                      <img
                        src="data:image/jpeg;base64,${submission.image_base64}"
                        title=${submission.prompt}
                        @click=${() => this.selectedSubmissions =
                          this.selectedSubmissions.length === 1 &&
                          this.selectedSubmissions[0] === submission ?
                          [] :
                          [submission]} />` :
                    html`
                      <div class="image-with-dominant-color"
                        style="background-color: ${
                          submission.image_dominant_color ?? '#aaa'};"
                        @click=${() => this.selectedSubmissions =
                          this.selectedSubmissions.length === 1 &&
                          this.selectedSubmissions[0] === submission ?
                          [] :
                          [submission]}>
                      </div>`}
                </div>`;
            });

          return html`
              <li class="cluster">
                <div class="cluster-title">
                  #${index + 1} 
                  (${this.anyFiltered === true ?
                    html`<strong>${filteredCount}</strong> / ${cluster.count}` :
                    html`<strong>${cluster.count}</strong>`} images)
                  <span class="more"
                    @click=${() => this.expandCluster =
                      this.expandCluster === cluster.index ? null : cluster.index}>
                    ${this.expandCluster === cluster.index ? 'less' : 'more'}
                  </span>
                </div>
                <div class="terms" style=${styleTerms}>
                  ${cluster.frequent_terms.slice(0, 5).join(', ')}
                </div>
                <div class="images" style=${styleImages}>
                  ${renderSubmissionsForCluster}
                </div>
              </li>`;
        });

    return html`
      <div class="clusters">
        ${this.clusters.length > 0 ?
          html`
            <div class="prompt-count">
              ${this.filteredSubmissions.length < this.submissions.length ?
                html`${this.filteredSubmissions.length.toLocaleString()
                } images (of ${this.submissions.length.toLocaleString()
                } total)` :
                html`${this.submissions.length.toLocaleString()} images total`}
            </div>
            <ul class="filter-chips">
              ${this.renderFilterChips(false)}
            </ul>
            <ul>${renderClusterList}</ul>` :
          'Loading...'}
      </div>`;
  }

  private renderSessions() {
    if (this.dataLoaded === false) {
      return html`Loading...`;
    }

    const filteredSessions =
        this.filteredSessions.slice(0, this.sessionVisibleCount);

    const areArraysEqual = (arr1: string[], arr2: string[]) => {
      if (arr1.length !== arr2.length) {
        return false;
      }
      arr1.sort();
      arr2.sort();
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    };

    const renderSessionList = filteredSessions.map((session) => {
      const stylePromptCell = classMap({
        'prompt': true,
        'clickable': session.is_submitted_count > 0,
      });

      const handleClickRow = () => {
        if (session.is_submitted_count > 0) {
          this.selectedDimensions['prompt'] =
              this.selectedDimensions['prompt'] === session.prompt ?
              null :
              session.prompt;
          const isSame = areArraysEqual(
              this.selectedSubmissions.map(
                  (submission) => submission.image_hashed_filename),
              this.submissions
                  .filter(
                      (submission: any) =>
                          session.image_hashed_filenames.includes(
                              submission.image_hashed_filename))
                  .map((submission: any) => submission.image_hashed_filename));
          this.selectedSubmissions = isSame === true ?
              [] :
              this.submissions.filter(
                  (submission: any) => session.image_hashed_filenames.includes(
                      submission.image_hashed_filename));
        }
      };

      return html`
          <tr class="session">
            <td class="submitter clickable"
              title="Click to filter by this submitter"
              @click=${() =>
                this.selectedDimensions['submitter_id'] = session.submitter_id}
            >
              ${session.submitter_id}
            </td>
            <td class=${stylePromptCell}
              @click=${handleClickRow}>
              ${session.prompt}
            </td>
            <td class="datetime">${session.start_time_formatted}</td>
            <td>
              ${session.text_safety_by_human !== undefined &&
                session.text_safety_by_human.includes('unsafe') ?
                html`<span title="Human validators said unsafe">!</span>` :
                ''}
            </td>
            <td>
              ${session.text_safety_by_machine !== undefined &&
                session.text_safety_by_machine.includes('unsafe') ?
                html`<span title="Machine validator said unsafe">!</span>` :
                ''}
            </td>
            <td class="count clickable"
              @click=${handleClickRow}>
              ${session.is_submitted_count > 0 ?
                session.is_submitted_count : ''}
            </td>
          </tr>`;
    });

    const topUnigrams = this.filteredSessions.length <
            this.allSessionsButConsiderOnlySubmitted.length ?
        this.topUnigrams :
        [];
    const topBigrams = this.filteredSessions.length <
            this.allSessionsButConsiderOnlySubmitted.length ?
        this.topBigrams :
        [];

    const handleEnteredTextChange = (e: Event) => {
      const enteredValue = (e.target as HTMLInputElement).value;
      if (enteredValue.length === 0 || enteredValue.length > 2) {
        this.searchQuery = enteredValue;
      }
    };

    const handleChangeCheckbox = (e: Event) => {
      this.onlySubmitted = (e.target as HTMLInputElement).checked
    };

    return html`
        <div class="prompt-count">
          ${this.filteredSessions.length < this.sessions.length ?
            html`${this.filteredSessions.length.toLocaleString()
            } prompts (of ${this.sessions.length.toLocaleString()
            } total)` :
            html`${this.sessions.length.toLocaleString()
            } prompts total`}
        </div>
        <ul class="filter-chips">
          ${this.renderFilterChips(true)}
        </ul>
        <div class="only-submitted-checkbox">
          <label>
            <input type="checkbox"
              @change=${handleChangeCheckbox}
              ?checked=${this.onlySubmitted} />
              Only prompts that have at least one submission
          </label>
        </div>
        <div class="search">
          Search: <input type="search"
            @input=${handleEnteredTextChange}
            .value=${this.searchQuery} />
        </div>
        ${topUnigrams.length > 0 ?
          html`
            <div class="top-ngrams">
              Keywords: ${topUnigrams.join(', ')}
            </div>` :
          ''}
        ${topBigrams.length > 0 ?
          html`
            <div class="top-ngrams">
              Bi-grams: ${topBigrams.join(', ')}
            </div>` :
          ''}
        <table id="sessions">
        <thead>
          <tr>
            <th>Submitter</th>
            <th>Prompt</th>
            <th>Date</th>
            <th colspan="2"
              title="Whether human or machine validators said unsafe">
              Safety
            </th>
            <th title="Number of submitted images from this prompt">#Img</th>
          </tr>
        </thead>
        <tbody>${renderSessionList}</tbody>
        </table>
        ${this.filteredSessions.length > filteredSessions.length ?
          html`
            <div class="show-more"
              @click=${() => this.sessionVisibleCount += 50}>
              Show 50 more
            </div>` :
          ''}`
  }

  private renderFilters() {
    if (this.dataLoaded === false) {
      return html`Loading...`;
    }

    const handleClickDimension = (dimensionName: string, value: string) => {
      if (this.selectedDimensions[dimensionName] === value) {
        this.selectedDimensions[dimensionName] = null;
      } else {
        this.selectedDimensions[dimensionName] = value;
      }
    };

    const styleRow = (dimensionName: string, value: string) => classMap({
      'selected': this.selectedDimensions[dimensionName] === value,
    });

    const styleContainer = (dimensionName: string) => classMap({
      'dimension': true,
      'narrow':
          !['text_attack_mode', 'image_failure_type', 'image_failure_target']
               .includes(dimensionName)
    })

    return this.dimensionsForFilteredExamples.map((dimension) => {
      return html`
        <div class=${styleContainer(dimension.field_name)}>
          <div class="filter-title">${dimension.label}</div>
          <div class="table-container">
            <table>
              ${dimension.values
                  .filter((value: string) => value !== '')
                  .map((value: string) => {
                    return html`
                      <tr class=${styleRow(dimension.field_name, value)}
                        @click=${() => void handleClickDimension(
                            dimension.field_name, value)}>
                        <td>${value}</td>
                        <td class="count">${dimension.counts[value] || 0}</td>
                      </tr>`;
              })}
            </table>
          </div>
        </div>
        `;
    });
  }

  private renderDetails() {
    if (this.selectedSubmissions.length === 0) {
      return html`Click an image from left`;
    }

    const renderSubmission = (submission: any) => {
      const image =
        submission.hasOwnProperty('image_base64') ?
        html`
          <img class="image" src="data:image/jpeg;base64,${
            submission.image_base64}" />` :
        html`
          <div class="image-with-dominant-color"
            style="background-color: ${submission.image_dominant_color};">
          </div>`;

      return html`
          <div class="submission">
            <div>${image}</div>

            <div class="field-block">
              <div class="field-title">Submitted Prompt:</div>
              <div class="prompt-text">"${submission.prompt}"</div>
            </div>
            <div class="field-block">
              <div class="field-title">Rewritten Prompt:</div>
              <div class="prompt-text">"${submission.rewritten_prompt}"</div>
            </div>
            <div class="field-block inline">
              <div class="field-title">Text Attack Modes:</div>
              <ul>${submission.text_attack_mode.map(
                (item: string) => html`<li>${item}</li>`)}</ul>
            </div>

            <div class="field-block inline">
              <div class="field-title">Image Failure Types:</div>
              <ul>${submission.image_failure_type.map(
                (item: string) => html`<li>${item}</li>`)}</ul>
            </div>
            <div class="field-block inline">
            <div class="field-title">Image Failure Targets:</div>
              <ul>${submission.image_failure_target.map(
                (item: string) => html`<li>${item}</li>`)}</ul>
            </div>
            <div class="field-block inline">
              <div class="field-title">Submitter ID:</div>
              <div>${submission.submitter_id}</div>
            </div>

            ${submission.text_safety_by_human !== undefined ?
              html`<div class="field-block inline">
                <div class="field-title">Text Safety by Human Validators:</div>
                <div>
                  ${submission.text_safety_by_human}
                  <small>(${submission.human_text_unsafe_count}/${
                    submission.validations.length} unsafe)</small>
                </div>
              </div>` : ''}

            ${submission.text_safety_by_machine !== undefined ?
              html`<div class="field-block inline">
                <div class="field-title">Text Safety by Machine:</div>
                <div>
                  ${submission.text_safety_by_machine}
                </div>
              </div>` : ''}

            ${submission.image_safety_by_human !== undefined ?
              html`<div class="field-block inline">
                <div class="field-title">Image Safety by Human Validators:</div>
                <div>
                  ${submission.image_safety_by_human}
                  <small>(${submission.human_image_unsafe_count}/${
                    submission.validations.length} unsafe)</small>
                </div>
              </div>` : ''}

            ${submission.image_safety_by_machine !== undefined ?
              html`<div class="field-block inline">
                <div class="field-title">Image Safety by Machine:</div>
                <div>
                  ${submission.image_safety_by_machine}
                </div>
              </div>` : ''}

            <div class="field-block" style="margin-top: 10px;">
              <div class="field-title">Similar Submitted Images:</div>
              <div class="similar-images">
                ${submission.similar_image_indices
                    .slice(0, this.numSimilarImages)
                    .map((imageIndex: number) => {
                      const similarSubmission = this.submissions[imageIndex];
                      return similarSubmission.hasOwnProperty('image_base64') ?
                        html`
                          <div>
                            <img class="image-similar"
                              src="data:image/jpeg;base64,${
                                similarSubmission.image_base64}"
                              title=${similarSubmission.prompt}
                              @click=${() => this.selectedSubmissions = [
                                similarSubmission
                              ]} />
                          </div>` :
                        html`
                          <div>
                            <div class="image-similar-with-dominant-color"
                              style="background-color: ${
                                similarSubmission.image_dominant_color};"
                              title=${similarSubmission.prompt}
                              @click=${() => this.selectedSubmissions = [
                                similarSubmission
                              ]} />
                          </div>`;
                    })}
              </div>
            </div>
          </div>`;
    };

    const submissions = this.selectedSubmissions;

    const renderSubmissions = submissions.map((submission) => html`
      ${renderSubmission(submission)}`);

    return html`${renderSubmissions}`;
  }

  override render() {
    const styleSelectedDataset = (index: number) => classMap(
      {'round-num': true, 'selected-round': this.datasetIndex === index});

    const renderDatasets = this.datasets.map(
      (dataset: Dataset, index: number) => {
        return html`
          <div class=${styleSelectedDataset(index)}>
            <a href="?datasetIndex=${index}">${dataset.label}</a>
          </div>`;
    });
    
    return html`
        <div id="container">
          <div id="header">
            <div class="title">
              <strong>Adversarial Nibbler</strong> Dataset Visualization
            </div>
            <div class="rounds">
              ${renderDatasets}
            </div>
            <div class="icons">
              <a href="https://github.com/PAIR-code/adversarial-nibbler-vis"
                target="_blank">
                <mwc-icon class="icon" title="Open Documentation Page">
                  help_outline
                </mwc-icon>
              </a>
            </div>
          </div>
          <div id="filters-panel">
            <div class="dimensions">
              ${this.renderFilters()}
            </div>
          </div>
          <div id="main">
            <div id="sessions-panel">
              <h2>Prompts</h2>
              ${this.renderSessions()}
            </div>
            <div id="clusters-panel">
              <h2>Image Clusters</h2>
              ${this.renderClusters()}
            </div>
            <div id="details-panel">
              <h2>Selected Image(s)</h2>
              ${this.renderDetails()}
            </div>
          </div>
        </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nibbler-vis-app': NibberVisualizationAppElement;
  }
}
