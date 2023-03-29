const getCroppedImageUrl = (url: string) => {
  // transfer incoming url to cropped one
  // old: ....rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
  // new: ....rawg.io/media/crop/600/400/games/456/456dea5e1c7e3cd07060c14e96612001.jpg

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
