const regex = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passOneLetter: /[a-zA-Z]/,
  passOneDigit: /\d/,
  name: /^(?!.* .* )[a-zA-Z ]{2,25}$/,
};

export default regex;
