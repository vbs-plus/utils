import getType from "../type/getType";

/**
 * @description: 校验是否为身份证
 * @param {string} data
 * @return {*}
 */
export default (code: string): boolean => {
  const dataType = getType(code);
  if (dataType !== "string") return false;
  const city: { [key: string]: string } = {
    "11": "北京",
    "12": "天津",
    "13": "河北",
    "14": "山西",
    "15": "内蒙古",
    "21": "辽宁",
    "22": "吉林",
    "23": "黑龙江 ",
    "31": "上海",
    "32": "江苏",
    "33": "浙江",
    "34": "安徽",
    "35": "福建",
    "36": "江西",
    "37": "山东",
    "41": "河南",
    "42": "湖北 ",
    "43": "湖南",
    "44": "广东",
    "45": "广西",
    "46": "海南",
    "50": "重庆",
    "51": "四川",
    "52": "贵州",
    "53": "云南",
    "54": "西藏 ",
    "61": "陕西",
    "62": "甘肃",
    "63": "青海",
    "64": "宁夏",
    "65": "新疆",
    "81": "中国香港",
    "82": "中国澳门",
    "83": "中国台湾",
    "91": "国外 ",
  };
  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    console.log("格式错误");
    return false;
  }

  if (!city[code.slice(0, 2)]) {
    console.log("地址编码错误");
    return false;
  }
  if (code.length !== 18) return false;
  const sBirthday = code.slice(6, 10) + "-" + Number(code.slice(10, 12)) + "-" + Number(code.slice(12, 14));
  const d = new Date(sBirthday.replace(/-/g, "/"));
  if (sBirthday != d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()) {
    console.log("非法生日");
    return false;
  }
  const arr = code.split("");
  // ∑(ai×Wi)(mod 11)
  // 加权因子
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验位
  const parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  let ai = 0;
  let wi = 0;
  for (let i = 0; i < 17; i++) {
    ai = Number(arr[i]);
    wi = factor[i];
    sum += ai * wi;
  }
  const last = parity[sum % 11];
  if (last != arr[17]) {
    console.log("校验位错误");
    return false;
  }
  return true;
};
