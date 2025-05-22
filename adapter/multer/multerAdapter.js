import multer from 'multer';
import path from 'path';

// Armazenamento customizado
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // ex: ".pdf"
    const nomeBase = path.basename(file.originalname, ext);
    const nomeFinal = `${nomeBase}-${Date.now()}${ext}`;
    cb(null, nomeFinal);
  }
});

const upload = multer({ storage });

export default upload;
