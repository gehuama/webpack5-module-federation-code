let store = await import("team-b/store");
let Dropdown = await import("team-b/dropdown");
let LoginModel = await import("./login-model");
import isArray from 'is-array';
console.log("team-b:store",store);
export default `(HomePage[${Dropdown.default}][${LoginModel.default}][${isArray.name}])`