const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
  // app.get('/notes', (req, res) => {
  //   res.sendFile(__dirname, '../client/dist/notes.html');
  // });

  // app.get('/api/notes', (req, res) => {
  //   fs.readFile(__dirname + '/db.json', 'utf8', (err, data) => {
  //     if (err) throw err;
  //     res.json(JSON.parse(data));
  //   });
  // });


  // app.post('/api/notes', (req, res) => {
  //   fs.readFile(__dirname + '/db.json', 'utf8', (err, data) => {
  //     if (err) throw err;
  //     const notes = JSON.parse(data);
  //     const newNote = {
  //       id: Date.now().toString(),
  //       title: req.body.title,
  //       text: req.body.text,
  //     };
  //     notes.push(newNote);
  //     fs.writeFile(__dirname + '/db.json', JSON.stringify(notes), (err) => {
  //       if (err) throw err;
  //       res.json(newNote);
  //     });
  //   });
  // });

  // app.delete('/api/notes/:id', (req, res) => {
  //   fs.readFile(__dirname + '/db.json', 'utf8', (err, data) => {
  //     if (err) throw err;
  //     const notes = JSON.parse(data);
  //     const filteredNotes = notes.filter((note) => note.id !== req.params.id);
  //     fs.writeFile(__dirname + '/db.json', JSON.stringify(filteredNotes), (err) => {
  //       if (err) throw err;
  //       res.sendStatus(200);
  //     });
  //   });
  // });

  // app.listen(PORT, () => {
  //   console.log(`Server listening on port ${PORT}`);
  // });



