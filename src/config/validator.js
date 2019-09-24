import validator from 'validator';

export default props => {
  const keys = Object.keys(props);
  const validResponse = keys.map(key => {
    if (props[key] === undefined)
      return {
        field: 'general',
        errorType: 'dataWrong',
      };

    switch (key) {
      case 'id': {
        if (validator.isEmpty(props[key])) {
          return {
            field: 'general',
            errorType: 'idEmpty',
          };
        }
        if (!validator.isAlphanumeric(props[key])) {
          return {
            field: 'general',
            errorType: 'idAlpaNum',
          };
        }
        return true;
      }

      case 'firstName':
      case 'lastName': {
        if (validator.isEmpty(props[key])) {
          return {
            field: key,
            errorType: 'fieldEmpty',
          };
        }
        if (props[key].length > 15 || props[key].length < 3) {
          return {
            field: key,
            errorType: 'textCharactersNumber',
          };
        }
        if (/[^\p{L}A-Za-z\d\s]/.test(props[key])) {
          return {
            field: key,
            errorType: 'textAlpaNum',
          };
        }
        return true;
      }
      case 'email': {
        if (!validator.isEmail(props[key])) {
          return {
            field: key,
            errorType: 'emailWrong',
          };
        }
        break;
      }
      case 'password': {
        if (validator.isEmpty(props[key])) {
          return {
            field: key,
            errorType: 'passwordEmpty',
          };
        }
        break;
      }
      default:
        return true;
    }
    return true;
  });

  return validResponse.find(e => typeof e === 'object');
};
