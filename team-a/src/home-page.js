let Dropdown = await import("team-b/dropdown");
let LoginModel = await import("./login-model");
import isArray from 'is-array';

export default `(HomePage[${Dropdown.default}][${LoginModel.default}][${isArray.name}])`