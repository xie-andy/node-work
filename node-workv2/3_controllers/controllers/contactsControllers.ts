// Function to handle form data
export function createContact(req, res) {
  console.log(req.fields); // contains non-file fields
  res.send(`New contact: ${req.fields.name}`);
};