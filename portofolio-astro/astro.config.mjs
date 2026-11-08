import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // /cv tidak lagi berupa halaman. Yang tersedia hanya PDF-nya,
  // jadi rute lama diarahkan ke sana supaya tautan lama tidak 404.
  // Nama file memakai spasi, mengikuti file yang benar-benar ada di public/.
  redirects: {
    '/cv': '/Khoirul Umam Novalidi-CV.pdf',
  },
});
