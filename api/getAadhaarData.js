export default function handler(req, res) {
  try {
    // Log incoming request
    console.log("📥 Aadhaar Callback received");
    console.log("Method:", req.method);
    console.log("Headers:", req.headers);
    console.log("Body:", JSON.stringify(req.body, null, 2));

    // Handle POST (actual Aadhaar callback)
    if (req.method === "POST") {
      return res.status(200).json({
        status: "SUCCESS",
        message: "Aadhaar data received",
        timestamp: new Date()
      });
    }

    // Handle GET (for testing in browser)
    if (req.method === "GET") {
      return res.status(200).send("Aadhaar callback endpoint working. Use POST.");
    }

    // Other methods
    return res.status(405).json({
      status: "FAILED",
      message: "Method Not Allowed"
    });

  } catch (error) {
    console.error("❌ Error:", error);

    return res.status(500).json({
      status: "ERROR",
      message: "Internal Server Error"
    });
  }
}
