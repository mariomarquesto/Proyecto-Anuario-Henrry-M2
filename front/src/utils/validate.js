export function validateInputs(input, errores) {
  const { name, value } = input;

  const linkedinRegex =
    /^(https?:\/\/(?:www\.)?linkedin\.com\/[A-Za-z0-9-._~:/?#[\]@!$&'()*+,;=.]+)$/;

  switch (name) {
    case "nombre":
    case "apellido":
      /^[A-Z][a-zA-Z]*$/.test(value)
        ? (errores = { ...errores, [name]: "" })
        : (errores = {
            ...errores,
            [name]:
              "No debe contener números, ni símbolos, y la primera letra debe ser mayúscula.",
          });
      break;
    case "pais":
    case "estado":
    case "ciudad":
      value.trim().length !== 0
        ? (errores = {
            ...errores,
            localizacion: { ...errores.localizacion, [name]: "" },
          })
        : (errores = {
            ...errores,
            localizacion: {
              ...errores.localizacion,
              [name]: `El campo '${name}' es obligatorio.`,
            },
          });
      break;
    case "contacto":
      linkedinRegex.test(value)
        ? (errores = { ...errores, contacto: "" })
        : (errores = {
            ...errores,
            contacto: "Debe ser una URL válida de LinkedIn.",
          });
      break;
    case "mensaje":
      value.trim().length > 10
        ? (errores = { ...errores, mensaje: "" })
        : (errores = {
            ...errores,
            mensaje:
              "Debe tener más de 10 caracteres, sin contar los espacios.",
          });
      break;
  }
  return errores;
}

export function validateEdit(inputs, errores) {

  inputs = flattenObject(inputs);

  const linkedinRegex =
    /^(https?:\/\/(?:www\.)?linkedin\.com\/[A-Za-z0-9-._~:/?#[\]@!$&'()*+,;=.]+)$/;

  for (const prop in inputs) {
    switch (prop) {
      case "nombre":
      case "apellido":
        /^[A-Z][a-zA-Z]*$/.test(inputs[prop])
          ? (errores[prop] = "")
          : (errores[prop] =
              "No debe contener números, ni símbolos, y la primera letra debe ser mayúscula.");
        break;
      case "pais":
      case "estado":
      case "ciudad":
        inputs[prop].trim().length !== 0
          ? (errores.localizacion[prop] = "")
          : (errores.localizacion[prop] = `El campo '${prop}' es obligatorio.`);
        break;
      case "contacto":
        linkedinRegex.test(inputs[prop])
          ? (errores.contacto = "")
          : (errores.contacto = "Debe ser una URL válida de LinkedIn.");
        break;
      case "mensaje":
        inputs[prop].trim().length > 10
          ? (errores.mensaje = "")
          : (errores.mensaje =
              "Debe tener más de 10 caracteres, sin contar los espacios.");
        break;
    }
  }
  return errores;
}

export function validateSubmit(errores) {
  let cantErrores = 0;
  for (const key in errores) {
    if (typeof errores[key] === "object")
      cantErrores += validateSubmit(errores[key]);
    else if (errores[key].length > 0) cantErrores++;
  }
  return cantErrores;
}


function flattenObject(obj, prefix = "") {
  const flatObject = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {

      if (typeof obj[key] === "object" && obj[key] !== null) {
        const nestedProps = flattenObject(obj[key], key);
        Object.assign(flatObject, nestedProps);
      } else {
        flatObject[key] = obj[key];
      }
    }
  }

  return flatObject;
}
