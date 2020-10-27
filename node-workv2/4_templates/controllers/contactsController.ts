// Function to handle form data
export function createContact(req, res) {
  console.log(req.fields); // contains non-file fields
  const params = {
    'contact': req.fields,
  };
  res.render('contacts/show', params);
};

// Function to display the form
export function form(req: any, res: any) {
  res.render('contacts/form');
};