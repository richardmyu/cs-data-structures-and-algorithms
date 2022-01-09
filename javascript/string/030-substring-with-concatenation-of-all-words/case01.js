const testFn = require("./test");

/**
解法 1

思路
  1.获取 words 全组合；
  2.再逐个匹配；
  3.注意：找出所有满足的组合字符串，至少有一个；

小结

 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// TODO: 内存溢出
const findSubstring = function (s, words) {
  let l = comb(words);
  let r = [];
  // for (let i = 0; i < l.length; i++) {
  //   let reg = new RegExp('' + l[i], 'g');
  //   let flag;
  //   while ((flag = reg.exec(s)) !== null) {
  //     console.log(reg.index);
  //     r.push(reg.index);
  //   }
  // }
  for (let i = 0; i < l.length; i++) {
    let nextInd = s.indexOf(l[i]);
    let prevInd = s.lastIndexOf(l[i]);
    if (nextInd === prevInd) {
      if (nextInd !== -1) {
        r.push(nextInd);
      }
    } else {
      if (nextInd !== -1) {
        r.push(nextInd);
      }
      if (prevInd !== -1) {
        r.push(prevInd);
      }
      while (s.indexOf(l[i], nextInd + 1) !== s.slice(0, prevInd + l[i].length).lastIndexOf(l[i])) {
        nextInd = s.indexOf(l[i], nextInd + 1);
        prevInd = s.slice(0, prevInd + l[i].length - 1).lastIndexOf(l[i]);
        if (nextInd !== -1) {
          r.push(nextInd);
        }
        if (prevInd !== -1) {
          r.push(prevInd);
        }
      }
    }
  }
  r = [...new Set(r)];
  return r.sort((a, b) => a - b);
};


const comb = function (words) {
  if (!Array.isArray(words)) {
    return;
  }
  let r = [];
  let leng = words.length;
  if (leng === 0) {
    r = [];
  }
  if (leng === 1) {
    r.push(words);
  }
  if (leng === 2) {
    r.push(words[0].concat(words[1]));
    r.push(words[1].concat(words[0]));
  }
  if (leng > 2) {
    let basicLeng = words[0].length;
    for (let i = 0; i < leng; i++) {
      let ary = comb(words.slice(0, i).concat(words.slice(i + 1)));
      // 组合后的元素长度
      let subLeng = ary[0].length;
      // 组合元素可插入新元素的位置个数
      let jLeng = Math.ceil(subLeng / basicLeng) + 1;

      for (let j = 0; j < ary.length; j++) {
        for (let k = 0; k < jLeng; k++) {
          r.push(ary[j].slice(0, k * basicLeng) + words[i] + ary[j].slice(k * basicLeng));
        }
      }
    }
  }
  return [...new Set(r)];
}

// console.log(findSubstring("pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel", ["dhvf", "sind", "ffsl", "yekr", "zwzq", "kpeo", "cila", "tfty", "modg", "ztjg", "ybty", "heqg", "cpwo", "gdcj", "lnle", "sefg", "vimw", "bxcb"], [0, 1, 2]));
// console.log(comb(["dhvf", "sind", "ffsl", "yekr", "zwzq", "kpeo", "cila", "tfty", "modg", "ztjg", "ybty", "heqg", "cpwo", "gdcj", "lnle", "sefg", "vimw", "bxcb"]));
testFn(findSubstring, "解法 1");
