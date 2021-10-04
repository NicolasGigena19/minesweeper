class Validator {
  make = async (form, rules) => {
    try {
      await rules.validate(form, { abortEarly: false });
      return true;
    } catch (e) {
      this.errors = e;
      return false;
    }
  };

  getErrors() {
    return this.errors.inner;
  }
}

export default new Validator();
