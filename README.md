# Adversarial Nibbler Dataset Visualization

## Background

With the rise of text-to-image (T2I) generative AI models, it is critical to
evaluate model robustness against non-obvious attacks to mitigate the
generation of offensive images. We developed a red-teaming methodology for
crowdsourcing a diverse set of implicitly adversarial prompts, called the
[Adversarial Nibbler Challenge](https://dynabench.org/tasks/adversarial-nibbler).
We released the collected dataset at
https://github.com/google-research-datasets/adversarial-nibbler.


## Dataset Visualization

We built an interactive visualization tool for resaerchers and practitioners
to explore and analyze the
[released Adversarial Nibbler dataset](https://github.com/google-research-datasets/adversarial-nibbler).
The tool provides users with an overview of the dataset and enables users to
drill down into the dataset for detailed inspection of attempted prompts and
submitted images.


## Visualization Tool Details

The tool consists of multiple views:

1. **Categories view** provides aggregated counts of the categories (e.g.,
attack modes, failure types). Users can dynamically filter images and prompts
by selecting these categories (e.g., "failure type = violent").
2. **Prompt list view** presents the list of prompts attempted by the
participants.
3. **Image clusters view** visualizes 20 clusters of the submitted images.
We take the embedding representation of each image by using Google Cloud's
Image Embedding API and run agglomerative clustering algorithms to obtain the
clusters.
4. **Submission Details view** presents detailed information about selected
images.


## Demo

You can play with the demo of the visualization tool at
https://pair-code.github.io/adversarial-nibbler-vis.

This demo visualizes the Round 1 data available at the
[Adversarial Nibbler dataset repository](https://github.com/google-research-datasets/adversarial-nibbler).

![Screenshot of Adversarial Nibbler dataset visualization interface](documentation/images/adversarial_nibbler_vis_screenshot.png)



## Data Preprocessing

We have preprocessed the dataset in the dataset repository and stored it at
`dist/data/round1.json`. The demo on the above link is loading this json file.

The preprocessing step includes identifying the list of attempted prompts with
the number of submissions, extracting image embeddings and computing similar
images, aggregating submission attribute data (e.g., failure types), etc.

Please note that the released data does not contain actual images.
We use actual images to extract the following two data:

- As an alternative to displaying the actual images on the tool, we extracted
a dominant color from each image. We display a square filled with the dominant
color.

- To arrange images in clusters, we obtain image embeddings using
[Vertex AI multimodal API](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview).
Then we run the standard agglomerative clustering algorithm to get 20 clusters.


## Local Development

```shell
git clone https://github.com/PAIR-code/adversarial-nibbler-vis.git
cd adversarial-nibbler-vis
npm install
npm run build
npm run serve
```


## Citing Our Paper

If you use Adversarial Nibbler as part of your work, please cite our research
paper at https://arxiv.org/abs/2403.12075.

```
@inproceedings{quaye2024nibbler,
    title={{Adversarial Nibbler}: An Open Red-Teaming Method for Identifying Diverse Harms in Text-to-Image Generation},
    author={Quaye, Jessica and Parrish, Alicia and Inel, Oana and Rastogi, Charvi and Kirk, Hannah Rose and Kahng, Minsuk and van Liemt, Erin and Bartolo, Max and Tsang, Jess and White, Justin and Clement, Nathan and Mosquera, Rafael and Ciro, Juan and Reddi, Vijay Janapa and Aroyo, Lora},
    booktitle={ACM Conference on Fairness, Accountability, and Transparency (FAccT)},
    year={2024},
    publisher={ACM},
    url={https://arxiv.org/abs/2403.12075}
}
```


## Disclaimer

This is not an official Google product.

Adversarial Nibbler visualization is a research project by a small team. There
will be some bugs, but we are releasing at an early stage because we think it
already has some values.