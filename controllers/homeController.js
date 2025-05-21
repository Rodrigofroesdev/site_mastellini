export default class homeController {
    homeView(req, res) {
        const data = [
            {
                "id": "3",
                "type": "1",
                "title": "10x sem juros",
                "url": "https://wa.me/5518997355652",
                "image": "9f972afb8c388385777adb0d08367f96016fecb5.png",
                "enabled": "1",
                "order": "2",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-01 14:45:20",
                "updated_at": "2025-04-01 14:45:20",
                "deleted_at": null
            },
            {
                "id": "4",
                "type": "1",
                "title": "cartao plus",
                "url": "https://wa.me/5518997355652",
                "image": "043aa7eaa61d15ee9bd3da26c88d8b154e70ac3d.png",
                "enabled": "0",
                "order": "0",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-07 12:51:54",
                "updated_at": "2025-04-07 12:51:54",
                "deleted_at": null
            },
            {
                "id": "5",
                "type": "1",
                "title": "check in policial",
                "url": "https://wa.me/5518997355652",
                "image": "6966523ce9ce8fe8243172bb11a3887b2f477973.png",
                "enabled": "1",
                "order": "1",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-01 14:45:20",
                "updated_at": "2025-04-01 14:45:20",
                "deleted_at": null
            },
            {
                "id": "6",
                "type": "2",
                "title": "10x sem juros",
                "url": "https://wa.me/5518997355652",
                "image": "7be6aaa06ca71a688aebbde2d708372a9d828f8c.png",
                "enabled": "1",
                "order": "2",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-01 14:45:32",
                "updated_at": "2025-04-01 14:45:32",
                "deleted_at": null
            },
            {
                "id": "7",
                "type": "2",
                "title": "cartao plus",
                "url": "https://wa.me/5518997355652",
                "image": "da7f58b9210a569d2050cf347cf1d87764c13720.png",
                "enabled": "0",
                "order": "0",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-07 12:52:00",
                "updated_at": "2025-04-07 12:52:00",
                "deleted_at": null
            },
            {
                "id": "8",
                "type": "2",
                "title": "check in policial",
                "url": "https://wa.me/5518997355652",
                "image": "ed02e43f2649a927d4217a48fc3d6631868e1daf.png",
                "enabled": "1",
                "order": "1",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-01 14:45:32",
                "updated_at": "2025-04-01 14:45:32",
                "deleted_at": null
            },
            {
                "id": "9",
                "type": "2",
                "title": "Banner Padrao Criacao",
                "url": "https://wa.me/5518997355652",
                "image": "1e11e9c2153acf177fed7c0b9fa2ce7c49431b7c.png",
                "enabled": "1",
                "order": "3",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-01 14:45:32",
                "updated_at": "2025-04-01 14:45:32",
                "deleted_at": null
            },
            {
                "id": "10",
                "type": "1",
                "title": "Banner Padrao Criacao",
                "url": "https://wa.me/5518997355652",
                "image": "21152d9ef958a421945c43190ce447bd64786138.png",
                "enabled": "1",
                "order": "3",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-01 14:45:20",
                "updated_at": "2025-04-01 14:45:20",
                "deleted_at": null
            }
        ]

        res.render('home/home', { banners: data });
    }
}