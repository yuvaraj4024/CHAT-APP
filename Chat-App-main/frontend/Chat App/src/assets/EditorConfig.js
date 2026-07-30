export const editorConfig = {
  height: 500,
  width: 1000,

  menubar: "favs file edit view insert format tools table help",

  plugins: [
    "advlist",
    "autolink",
    "link",
    "image",
    "lists",
    "charmap",
    "preview",
    "anchor",
    "pagebreak",
    "searchreplace",
    "wordcount",
    "visualblocks",
    "visualchars",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "emoticons",
    "template",
    "help",
    "codesample",
    "mentions",
  ],
  toolbar:
    "undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | codesample blockquote link image | print preview media | forecolor backcolor emoticons",
  content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px } 
    blockquote {
      border: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: .1em;
      margin: 2.5em auto;
      max-width: 540px;
      padding: 0 2rem;
      position: relative;
      text-align: center;
      text-transform: uppercase;
    }
    
    blockquote::before {
      color: #fff200;
      content: '“';
      font-family: 'georgia';
      font-size: 4em;
      left: 30%;
      pointer-events: none;
      position: absolute;
      top: -.75em;
    }
    
    blockquote::after {
      bottom: -1.2em;
      color: #fff200;
      content: '”';
      font-family: 'georgia';
      font-size: 4em;
      pointer-events: none;
      position: absolute;
      right: 30%;
    }
    `,
};
