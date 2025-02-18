const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1]; // Get the payload part
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Replace URL-safe characters
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join("")
      );
      return JSON.parse(jsonPayload); // Convert the payload to a JavaScript object
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
  };
  export default decodeToken;