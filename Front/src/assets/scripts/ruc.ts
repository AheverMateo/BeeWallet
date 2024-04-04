import axios from 'axios';

export function ruc() {
  const data = {
    accion: 'consPorRuc',
    razSoc: '',
    nroRuc: '20607621048',
    nrodoc: '',
    token: '03AFcWeA5lBcaaukMpER6OtxXx2kU7bjoiNFC3SV1OK9DH1YnsVJTFn-JNTn9CJ-kIIl5Y5O40JVuij85SFArAGyXbotnIIm7AxIGGB7ZRhkZwfNbC4EcrqqIhDgSXSLm8QyS8wIKBWRgtHgTMxylQn-vD4rfuVKYXNSJhubP_ppSnZ1mLduRxHeWzjSr-k3KqsHi_CJn-Abz6-SzCnsqtft7vcAvKoz-xmLMTxEOYhCC7EjOo4DaD-wl0CUUuygn7ALZV6_9hsLKEN01qs-sSidXZ6scdQXKzo5ZnGhEaJ4-dOIZIDcL_gdZrdxBy6R_AFVseFBX-Ip7AUMoMKl4bP06OdZMBTXQv0mAid5pNB2GNcwrzj5kAbGwaNuSDqGyWusgODItUlni3kyj5DykOoBnRJZL3CrLCFlXcUDD5Vlhd__BcgHOpJZBKRo4ZpHdvzjTk40a8Ti8BxOQR9KtSuDXydv7zwh5_4gq8qcNr2KMRG58JQaIIM20PU_RUx5_15aMw2A_YGxQUt4aIxSMRGifE_W4r7NWkmhwYkyYhEPRzwtwU8HMYz9lUMHqS0MrvQP7JhtvDJQ9RTFxMiXqQTZSbCaMf2yZRu_-sJc9ZF40oUFNR-EF7C4xKPohqC-KvJUsODFWdIsNpbLO7qHBrKcOUWhB-dFBXyuF7V1geqKlGJNdN6x9m2lM',
    contexto: 'ti-it',
    modo: '1',
    rbtnTipo: '1',
    search1: '20607621048',
    tipdoc: '1',
    search2: '',
    search3: '',
    codigo: ''
  };
  
  const config = {
    url: 'https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'ITMRCONSRUCSESSION=kwzVmNNJ9Cmr7lnbL114fR7QzG2kT9jpKpcFt4Pjy3bRy5JTyChhbv2Lnmw0vLTVny5BnbhK86ZLM0hVyyWZ5dhV2CzSpXRxH7Y8y1Jn96ysWXw7p11DgHd4834TL8YgNh9KG3vNyR5jwN6h9N0NywWp4KFvLQwbG2ZhvzBwywWPLkYjmYgJ9G1hNmhhVNSNGSPxv1cGyppmd1LBmvWQpgQ1My22wLm5QYdT3qbkSTNNBtPjSTbsnh441cmhDwQR!770120456!1589759890; TS01fda901=014dc399cbb7d92cad1630c5b0226e6e936a0a6e965c16fc748c7fd1598f3141f365e21a69c9d9183933bba2f912122f3385dd3d344d461f0d3f6100dda5ec9e7fde8b7749; site24x7rumID=8400927443914892.1712180527022.1712180527022; TSf3c1dbbd027=08fe7428c8ab20005b2fa3fa20cfcd0571d2e3633525aaf6469e869ddf9c179ac22796e7d06078ae080992e8e8113000d4abf9f7bb09fb7d970a8852fbaddedf2e512e97782c17abfc2ce2c4cd018c077117f823bd18e6c565cc1e3ec6f9f2cf',
      'Origin': 'https://e-consultaruc.sunat.gob.pe',
      'Referer': 'https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
    },
    data
  };
  
  axios(config)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

export async function ruc2() {
  const response = await axios.get('https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/FrameCriterioBusquedaWeb.jsp',{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'ITMRCONSRUC'
  });
  console.log(response.status);
}