import { QuotaDTO } from "src/dtos/quota.response.dto";

export const quotas: QuotaDTO[] = [];

export const all_quotas: QuotaDTO[] = [
    {
                "cod": '1',
              "value": 100.00,
        "description": "quota 01",
        "count_title": 10
    },
    {
                "cod": '2',
              "value": 500.00,
        "description": "quota 02",
        "count_title": 5
    },
    {
                "cod": '3',
              "value": 300.00,
        "description": "quota 03",
        "count_title": 15
    }
]