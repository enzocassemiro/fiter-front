function phoneMask(value) {
    if (value) {
      return value.replace(/^(\d{2})(\d{5})(\d)/, '($1)$2-$3');
    }
  }

export default phoneMask;