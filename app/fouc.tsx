export function FOUCScript() {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
  (function() {
    try {
      var mode = localStorage.getItem('theme');
      if (!mode) {
        mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.classList.add(mode);
    } catch (e) {}
  })();
          `,
        }}
      />
    );
  }