var messages = [
    {
        nickname: "user293",
        text: "w alfsbxmwswpw ylxxwpw xlgl p'bgwac xlpbnwlgk hcpwvc. jbkupw cmmwhwxmw vkfkgmw dzldcucgl ycpxwmc xbp acfswcfkgml apwfcmwal. vlhzkffl lzucgwnnczk bgc alghkgmwlg dkz vwykgvkzk pc glxmzc acbxc."
    },
    {
        nickname: "YM",
        text: "glg dlxxwcfl dkzfkmmkzk aqk p'cfswkgmcpwxfl aw lxmcalpw. xlxmkgwcfl w alfsbxmwswpw ylxxwpw alfk bgwac xakpmc pluwac."
    },
    {
        nickname: "Kelsi",
        text: "kxcmml! scxmc alg pk fwgaqwcmk xbp acfswcfkgml apwfcmwal. algalzvl dwkgcfkgmk."
    },
    {
        nickname: "Luigi76",
        text: "dbgmwcfl cppk kgkzuwk zwgglhcswpw. lmmkzzkfl wp ychlzk vkpp’ldwgwlgk dbsspwac."
    },
    {
        nickname: "Kelsi",
        text: "glg hlupwl dzldlxmk vc nkaac zlxxc. w alfsbxmwswpw ylxxwpw xlgl pc glxmzc dzwlzwmc."
    },
    {
        nickname: "Antares",
        text: "dlmzkffl mzlhczk bg kjbwpwszwl mzc alfsbxmwswpw ylxxwpw kv kgkzuwk zwgglhcswpw."
    },
    {
        nickname: "Kelsi",
        text: "gl, glg dlxxwcfl dkzfkmmkzaw xlpbnwlgw vc gk aczgk gk dkxa’."
    },
    {
        nickname: "Kemplen_",
        text: "vlsswcfl algxwvkzczk p'wfdcmml c pbgul mkzfwgk vkppk glxmzk xakpmk. bg swpcgawl dlmzkssk dlzmczk c bg ybmbzl xlxmkgwswpk."
    },
    {
        nickname: "user293",
        text: "glg aw cffczzbgcmk ‘k dcpp’."
    },
    {
        nickname: "YM",
        text: "xlxmkgwcfl bg ybmbzl ylxxwpk xkgnc kxwmcnwlgk!"
    },
    {
        nickname: "Luigi76",
        text: "fc glg dlxxwcfl wuglzczk pk algxkubkgnk gkucmwhk vkw alfsbxmwswpw ylxxwpw xbpp'cfswkgmk. vlhzkffl akzaczk cpmkzgcmwhk dwb xlxmkgwswpw."
    },
    {
        nickname: "Kelsi",
        text: "aqwbvw ‘b akxx’, @Luigi76! glg dkzfkmmkzl aqk mb fkmmc wg vwxabxxwlgk pk glxmzk vkawxwlgw. xk glg pc xfkmmw xczkfl alxmzkmmw cv kxdkppkzmw."
    },
    {
        nickname: "Kemplen_",
        text: "jbc k czvkgnc kxdlxwml c alfcgvczk!"
    },
    {
        nickname: "Antares",
        text: "acdl cxalpmc gb dla’, cpabgk vkppk mbk cnwlgw zkakgmw xmcggl xbxawmcgvl dzklaabdcnwlgk. pc mbc zkmlzwac gkucnwlgwxmc k p'wuglzczk pk dzlhk xawkgmwywaqk xbp acfswcfkgml apwfcmwal glg mw ycggl cddczwzk alfk bg pkcvkz zkxdlgxcswpk."
    },
    {
        nickname: "Kelsi",
        text: "alfk lxw azwmwaczk wp glxmzl ldkzcml? jbc alfcgvwcfl glw, k mb xkw xlpl bg lff’kffkzvc."
    },
    {
        nickname: "Kemplen_",
        text: "fc wuglzczk wp acfswcfkgml apwfcmwal k dzlfblhkzk p'bmwpwnnl vkw alfsbxmwswpw ylxxwpw dlmzkssk chkzk algxkubkgnk vwxcxmzlxk dkz pk ybmbzk ukgkzcnwlgw."
    },
    {
        nickname: "user293",
        text: "aqw xk gk ylmmk vkppk ukgkzcnwlgw ybmbzk. c’ ycaa’ ‘k aqw ak hl fcpk!"
    },
    {
        nickname: "YM",
        text: "‘c gc zkaaqwc ak mzcxk k cpp’cmc ak g’kxak. @Luigi76, @Antares, @Kemplen_, hlw mzk lffwgw ‘kffkzv, xwkmk alg glw l algmzl vw glw?"
    },
    {
        nickname: "Kelsi",
        text: "zwdkml, zwalzvcmk aqw alfcgvc jbw!"
    },
    {
        nickname: "Antares",
        text: "xml alg hlw."
    },
    {
        nickname: "Kemplen_",
        text: "hwhc czvkgnc, hwhc wp alfsbxmwswpk ylxxwpk!"
    },
    {
        nickname: "Kelsi",
        text: "‘cmc ycmm’ sblg."
    },
]

for (let i = 0; i < messages.length; i++) {
    var node = document.createElement('li');
    var mex = document.createElement("div");
    mex.className = "mex";
    var nick = document.createElement("p");
    nick.innerText = "@" + messages[i].nickname;
    var text = document.createElement("p");
    text.innerText = messages[i].text;
    text.className = "message";
    mex.append(nick);
    mex.append(text);
    node.appendChild(mex);
    document.querySelector('ul').appendChild(node);
}