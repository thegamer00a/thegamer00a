function getManifest() {
  return JSON.stringify({
    "id": "kkphim",
    "name": "KKPhim",
    "version": "1.0.0",
    "baseUrl": "https://phimapi.com",
    "iconUrl": "https://stpaulclinic.vn/vaapp/plugins/kkphim.png",
    "isEnabled": true,
    "type": "MOVIE"
  });
}

function getHomeSections() {
  return JSON.stringify([
    { slug: 'phim-chieu-rap', title: 'Phim Chiếu Rạp', type: 'Horizontal', path: 'danh-sach' },
        { slug: 'phim-bo', title: 'Phim Bộ', type: 'Horizontal', path: 'danh-sach' },
        { slug: 'phim-le', title: 'Phim Lẻ', type: 'Horizontal', path: 'danh-sach' },
        { slug: 'hoat-hinh', title: 'Hoạt Hình', type: 'Horizontal', path: 'danh-sach' }
    ]);
}

