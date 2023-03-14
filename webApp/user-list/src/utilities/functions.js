
export const hideMail = (mail) => {
    const splited = mail.split("@");
    const part1 = splited[0].slice(0, 3);
    const part2 = splited[1];
    return part1 + "...@" + part2;
  };
  
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB").replaceAll("/", ".");
  };
  