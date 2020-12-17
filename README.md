[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Sshatzkin/Audio-Feedback">
    <img src="./public/images/favicon/android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">PlayBack</h3>

  <p align="center">
    An online Media commenting tool for sending and receiving feedback.
    <br />
    <a href="https://audio-feedback-bcf04.web.app"><strong>Explore the Website »</strong></a>
    <br />
    <a href="https://github.com/Sshatzkin/Audio-Feedback/issues">Report Bug</a>
    ·
    <a href="https://github.com/Sshatzkin/Audio-Feedback/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
        <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Product Name Screen Shot][product-screenshot]](https://audio-feedback-bcf04.web.app)

With the rise of Covid-19, education is becoming increasingly virtual. Feedback to audio and video files of performances is now much harder to make and to understand. With PlayBack, virtual feedback is now as simple as typing out a comment at the right point in the video or audio file and pressing a button. Feedback comments are associated with timestamps, helping students figure out where and what the person who gave the feedback was talking about.

Piano students can have additional help understanding feedback with the real-time piano simulator.

### Built With

* HTML5
* CSS3
* JavaScript
* [Firebase](https://firebase.google.com/)

    * [Firebase Hosting](https://firebase.google.com/docs/hosting)
    * [Firebase Authentication](https://firebase.google.com/docs/auth)
    * [Firebase Storage](https://firebase.google.com/docs/storage)
    * [Firebase Real-Time Database](https://firebase.google.com/docs/database)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to set up a firebase hosting and storage. 
Then use node package manager to install firebase tools.
* npm
  ```sh
  npm install -g firebase-tools
  ```

Also, enable Email and Password and Google Auth in Authentication in Firebase

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Sshatzkin/Audio-Feedback.git
   ```



<!-- USAGE EXAMPLES -->
## Usage

* Aynchronous Feedback
    
    * Upload video and/or audio files and select the one you wish to send feedback on.
    * Press play and navigate to the timestamp you want to comment on.
    * Enter your comment at the bottom of the screen and press the add comment button.
    * Continue for as many comments as you wish to give.
* Real-time Feedback (For Piano players only as of release 1.0)

    * Select the listener or player role as necessary.
    * Invite people to the virtual room and get feedback while you play or give feedback while someone else plays.
    * You can even play the piano at the same time with others for socially distanced duet practice!


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Sshatzkin/Audio-Feedback/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Firebase](https://firebase.google.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Img Shields](https://shields.io)





[contributors-shield]: https://img.shields.io/github/contributors/Sshatzkin/Audio-Feedback.svg?style=for-the-badge
[contributors-url]: https://github.com/Sshatzkin/Audio-Feedback/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Sshatzkin/Audio-Feedback.svg?style=for-the-badge
[forks-url]: https://github.com/Sshatzkin/Audio-Feedback/network/members
[stars-shield]: https://img.shields.io/github/stars/Sshatzkin/Audio-Feedback.svg?style=for-the-badge
[stars-url]: https://github.com/Sshatzkin/Audio-Feedback/stargazers
[issues-shield]: https://img.shields.io/github/issues/Sshatzkin/Audio-Feedback.svg?style=for-the-badge
[issues-url]: https://github.com/Sshatzkin/Audio-Feedback/issues
[license-shield]: https://img.shields.io/github/license/Sshatzkin/Audio-Feedback.svg?style=for-the-badge
[license-url]: https://github.com/Sshatzkin/Audio-Feedback/blob/master/LICENSE.txt
[product-screenshot]: ./FeedbackScreenshot.png 