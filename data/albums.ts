// 🛡️ 本文件由 XingHuiSama 控制台自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    "title": "场景美术联系",
    "description": "学习学习学习",
    "cover": "https://htmlhoster.com/p/XSEPYAZN/纸箱.png",
    "id": "album_1792415369105",
    "photos": [
      {
        "url": "https://htmlhoster.com/p/Q9DMGDJQ/木箱2.jpg",
        "caption": "箱子二号，用了3dmax和keyshot得到渲染阴影在在此基础上进行更改的作品，完全没有什么更改的思路"
      },
      {
        "url": "https://htmlhoster.com/p/XSEPYAZN/纸箱.png",
        "caption": "箱子！光影好难把控QAQ"
      }
    ],
    "date": "2026-10-19"
  }
];