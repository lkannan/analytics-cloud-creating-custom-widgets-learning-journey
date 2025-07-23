#  Welcome to the Repo "Creating a custom-widget"

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/analytics-cloud-creating-custom-widgets-learning-journey)](https://api.reuse.software/info/github.com/SAP-samples/analytics-cloud-creating-custom-widgets-learning-journey)

<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

## Description
Welcome to this repository for the learning journey "Creating a custom-widget" published on [SAP Learning]([https://learning.sap.com/learning-journeys/creating-custom-widgets-for-sap-analytics-cloud-stories]). 

This learning journey will enable you to understand the need for custom widgets and demonstrate how to create them for SAP Analytics Cloud stories.

## Requirements
You should have an account for the SAP Analytics Cloud.

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/lkannan/analytics-cloud-creating-custom-widgets-learning-journey.git
cd analytics-cloud-creating-custom-widgets-learning-journey
```

### 2. Install dependencies
```sh
npm install
```

### 3. Run the local server
```sh
npm start
```
The server will start at [http://localhost:3000](http://localhost:3000).

### 4. Load the widget in SAP Analytics Cloud
- Go to the Custom Widget manager in SAC.
- Upload the manifest (`podiumWidget.json`).
- No need to upload any zip as the resource would be served from the localhost.
- Add the widget to your story and configure as needed.

## Download and Installation

We recommend to follow the instructions in the learning journey Creating a custom-widget on https://learning.sap.com/learning-journeys/creating-custom-widgets-for-sap-analytics-cloud-stories

## Known Issues
No known issues

## How to obtain support
[Create an issue](https://github.com/lkannan/analytics-cloud-creating-custom-widgets-learning-journey/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
