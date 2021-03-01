export default {
  response: (payload, type = "json") => {
    if (type === "json") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          payload,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    } else {
      return {
        statusCode: 200,
        body: payload,
        isBase64Encoded: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-disposition": `attachment; filename=${new Date().toISOString()}.${
            type === "img" ? "jpg" : "pdf"
          }`,
          "Content-Type": type === "img" ? "image/jpg" : "application/pdf",
        },
      };
    }
  },
  size: (base64String) => {
    let padding, inBytes, base64StringLength;
    if (base64String.endsWith("==")) padding = 2;
    else if (base64String.endsWith("=")) padding = 1;
    else padding = 0;

    base64StringLength = base64String.length;
    inBytes = (base64StringLength / 4) * 3 - padding;
    const kbytes = inBytes / 1000;
    return kbytes;
  },
};
