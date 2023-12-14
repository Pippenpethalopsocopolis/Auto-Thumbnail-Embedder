class YouTubeVideo {
  constructor(videoUrl) {
    this.videoUrl = videoUrl;
    this.initialize();
  }

  openVideo() {
    // Create a new page dynamically
    const newPage = window.open('', '_blank');

    // Add the embedded video player to the new page
    newPage.document.write(`
      <iframe width="560" height="315" src="${this.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `);

    // Close the document to prevent unwanted scripts from executing
    newPage.document.close();
  }

  getVideoId() {
    // Get the ID part of the youtube embedding link
    const regex = /\/embed\/([^?]+)/;
    const match = this.videoUrl.match(regex);
    return match ? match[1] : null;
  }

  changeThumbnailSrc() {
    // Set the thumbnail of the video as the video's original thumbnail
    const videoID = this.getVideoId();
    let imageElement = document.getElementById('thumbnail');
    imageElement.src = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
  }

  // Initialize the event listener
  initialize() {
    const thumbnailElement = document.getElementById('thumbnail');
    thumbnailElement.addEventListener('click', () => this.openVideo());
  }
}

const videoUrl = "https://www.youtube-nocookie.com/embed/p82vauAdgv8?si=VWJdojyb0mPhitTy";
const youtubeVideo = new YouTubeVideo(videoUrl);
youtubeVideo.changeThumbnailSrc();