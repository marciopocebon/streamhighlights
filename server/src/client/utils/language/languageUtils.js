// Maps a twitch language to a flag
export const mapToFlag = language => {
  switch (language) {
    case "en":
      return "us";
    case "pt-br":
      return "br";
    case "ko":
      return "kr";
    case "zh-tw":
      return "tw";
    case "en-gb":
      return "gb";
    case "zh":
      return "cn";
    case "ja":
      return "jp";
    case "da":
      return "dk";
    default:
      return language;
  }
};
