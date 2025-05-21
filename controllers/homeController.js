export default class homeController {
    homeView(req, res) {
        const exames = [
            {
                "id": "1",
                "title": "Beta Hcg Qualitativo (Hcg)",
                "url": "beta-hcg-qualitativo-hcg",
                "orientacoes": "<p>O HCG &eacute; uma glicoprote&iacute;na composta por duas subunidades (alfa e beta)...",
                "enabled": "1",
                "created_at": "2024-11-17 14:13:50",
                "updated_at": "2024-11-17 14:13:50",
                "deleted_at": null,
                "observacoes": "<p><strong>TEMPO DE JEJUM:</strong> Jejum n&atilde;o obrigat&oacute;rio... </p>",
                "prioridade_buscados": null
            },
            {
                "id": "3",
                "title": "Beta HCG Quantitativo (Beq)",
                "url": "beta-hcg-quantitativo-beq",
                "orientacoes": "<p>O HCG &eacute; uma glicoprote&iacute;na composta por duas subunidades (alfa e beta)...",
                "enabled": "1",
                "created_at": "2024-11-17 14:16:52",
                "updated_at": "2024-11-17 14:16:52",
                "deleted_at": "0000-00-00 00:00:00",
                "observacoes": "<p><strong>TEMPO DE JEJUM:</strong> Jejum n&atilde;o obrigat&oacute;rio...</p>",
                "prioridade_buscados": null
            },
            {
                "id": "4",
                "title": "Colesterol (HDL)",
                "url": "colesterol-hdl",
                "orientacoes": "<p>O colesterol &eacute; o principal lip&iacute;deo associado &agrave; doen&ccedil;a vascular...",
                "enabled": "1",
                "created_at": "2024-11-17 14:18:59",
                "updated_at": "2024-11-17 14:18:59",
                "deleted_at": "0000-00-00 00:00:00",
                "observacoes": "<p><strong>TEMPO DE JEJUM:</strong> Jejum n&atilde;o obrigat&oacute;rio.</p>",
                "prioridade_buscados": null
            },
            {
                "id": "5",
                "title": "Colesterol (LDL)",
                "url": "colesterol-ldl",
                "orientacoes": "<p>O colesterol &eacute; o principal lip&iacute;deo associado &agrave; doen&ccedil;a vascular...",
                "enabled": "1",
                "created_at": "2024-11-17 14:20:33",
                "updated_at": "2024-11-17 14:20:33",
                "deleted_at": "0000-00-00 00:00:00",
                "observacoes": "<p><strong>TEMPO DE JEJUM:</strong> Jejum n&atilde;o obrigat&oacute;rio...</p>",
                "prioridade_buscados": null
            }
        ]
        const data = [
            {
                "id": "3",
                "type": "1",
                "title": "10x sem juros",
                "url": "https://wa.me/5518997355652",
                "image": "banner01_home.png",
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
                "image": "banner01_home.png",
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
                "image": "banner01_home.png",
                "enabled": "1",
                "order": "1",
                "show_in": null,
                "show_out": null,
                "created_at": "2025-04-01 14:45:20",
                "updated_at": "2025-04-01 14:45:20",
                "deleted_at": null
            }
        ]

        res.render('home/home', { banners: data, exames: exames });
    }
}