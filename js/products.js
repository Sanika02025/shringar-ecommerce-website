const products = [
{
id:1,
name:"Paithani Silk Saree",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:5999,
image:"images/pai.jpg"
},

{
    id:2,
name:"Nauvari Saree",
category:"Saree",
type:"Nauvari",
    heritage:"Maharashtrian",
    occasion:"Festival",
    price:4499,
    image:"images/nav.jpg"
},

{
    id:3,
    name:"Kanjivaram Silk Saree",
    category:"Saree",
    type:"Kanjivaram",
    heritage:"South Indian",
    occasion:"Reception",
    price:7499,
    image:"images/kanji.jpg"
},

{
    id:4,
    name:"Temple Jewellery Set",
    category:"Jewellery",
    type:"Temple",
    heritage:"South Indian",
    occasion:"Wedding",
    price:2999,
    image:"images/jewel.jpg"
},

{
    id:5,
    name:"Bandhani Saree",
    category:"Saree",
    type:"Bandhani",
    heritage:"Gujarati",
    occasion:"Mehendi",
    price:3999,
    image:"images/band.jpg"
},

{
    id:6,
    name:"Mirror Work Lehenga",
    category:"Lehenga",
    type:"Mirror",
    heritage:"Gujarati",
    occasion:"Sangeet",
    price:8999,
    image:"images/leha.jpg"
},

{
    id:7,
    name:"Phulkari Dupatta",
    category:"Accessories",
    type:"Phulkari",
    heritage:"Punjabi",
    occasion:"Festival",
    price:1999,
    image:"images/phul.jpg"
},

{
    id:8,
    name:"Bridal Lehenga",
    category:"Lehenga",
    type:"Bridal",
    heritage:"North Indian",
    occasion:"Bridal",
    price:14999,
    image:"images/brida.jpg"
},

{
    id:9,
    name:"Kasavu Saree",
    category:"Saree",
    type:"Kasavu",
    heritage:"Kerala",
    occasion:"Temple",
    price:4999,
    image:"images/kasavu.jpg"
},

{
    id:10,
    name:"Mekhela Chador",
    category:"Saree",
    type:"Mekhela",
    heritage:"Assamese",
    occasion:"Traditional",
    price:5499,
    image:"images/chador.jpg"
},

{
    id:11,
    name:"Designer Kurti",
    category:"Kurti",
    type:"Designer",
    heritage:"Modern",
    occasion:"Casual",
    price:1499,
    image:"images/anar.jpg"
},

{
    id:12,
    name:"Wedding Blouse",
    category:"Blouse",
    type:"Wedding",
    heritage:"South Indian",
    occasion:"Wedding",
    price:2499,
    image:"images/blo.jpg"
},
{
    id:13,
    name:"Yellow Floral Saree",
    category:"Saree",
    type:"Yellow",
    heritage:"Modern",
    occasion:"Haldi",
    price:2999,
    image:"images/yel1.jpg"
},

{
    id:14,
    name:"Haldi Jewellery Set",
    category:"Jewellery",
    type:"Haldi",
    heritage:"Modern",
    occasion:"Haldi",
    price:1499,
    image:"images/haldi2.jpg"
},

{
    id:15,
    name:"Floral Haldi Dupatta",
    category:"Accessories",
    type:"Haldi",
    heritage:"Modern",
    occasion:"Haldi",
    price:999,
    image:"images/haldi3.jpg"
},

{
    id:16,
    name:"Yellow Anarkali",
    category:"Kurti",
    type:"Yellow",
    heritage:"Modern",
    occasion:"Haldi",
    price:2499,
    image:"images/haldi4.jpg"
},

{
    id:17,
    name:"Haldi Couple Set",
    category:"Couple",
    type:"Haldi",
    heritage:"Modern",
    occasion:"Haldi",
    price:4999,
    image:"images/haldi5.jpg"
},
{
    id:18,
    name:"Green Bandhani Saree",
    category:"Saree",
    type:"Bandhani",
    heritage:"Gujarati",
    occasion:"Mehendi",
    price:3499,
    image:"images/meh1.jpg"
},

{
    id:19,
    name:"Mirror Work Lehenga",
    category:"Lehenga",
    type:"Mirror",
    heritage:"Gujarati",
    occasion:"Mehendi",
    price:7999,
    image:"images/meh2.jpg"
},

{
    id:20,
    name:"Mehendi Jewellery Set",
    category:"Jewellery",
    type:"Mehendi",
    heritage:"Modern",
    occasion:"Mehendi",
    price:1999,
    image:"images/meh3.jpg"
},

{
    id:21,
    name:"Green Kurti Set",
    category:"Kurti",
    type:"Green",
    heritage:"Modern",
    occasion:"Mehendi",
    price:1899,
    image:"images/meh4.jpg"
},

{
    id:22,
    name:"Mehendi Couple Wear",
    category:"Couple",
    type:"Mehendi",
    heritage:"Modern",
    occasion:"Mehendi",
    price:5999,
    image:"images/meh5.jpg"
},
{
    id:23,
    name:"Sequin Saree",
    category:"Saree",
    type:"Sequin",
    heritage:"Modern",
    occasion:"Sangeet",
    price:4999,
    image:"images/san1.jpg"
},

{
    id:24,
    name:"Designer Party Gown",
    category:"Lehenga",
    type:"Designer",
    heritage:"Modern",
    occasion:"Sangeet",
    price:8999,
    image:"images/san2.jpg"
},

{
    id:25,
    name:"Stone Jewellery Set",
    category:"Jewellery",
    type:"Stone",
    heritage:"Modern",
    occasion:"Sangeet",
    price:2499,
    image:"images/san3.jpg"
},

{
    id:26,
    name:"Party Wear Kurti",
    category:"Kurti",
    type:"Party",
    heritage:"Modern",
    occasion:"Sangeet",
    price:1999,
    image:"images/san4.jpg"
},

{
    id:27,
    name:"Sangeet Couple Set",
    category:"Couple",
    type:"Sangeet",
    heritage:"Modern",
    occasion:"Sangeet",
    price:6999,
    image:"images/san5.jpg"
},
{
    id:28,
    name:"Banarasi Silk Saree",
    category:"Saree",
    type:"Banarasi",
    heritage:"North Indian",
    occasion:"Reception",
    price:8999,
    image:"images/rec1.jpg"
},

{
    id:29,
    name:"Reception Lehenga",
    category:"Lehenga",
    type:"Reception",
    heritage:"Modern",
    occasion:"Reception",
    price:11999,
    image:"images/rec2.jpg"
},

{
    id:30,
    name:"Diamond Style Set",
    category:"Jewellery",
    type:"Diamond",
    heritage:"Modern",
    occasion:"Reception",
    price:3999,
    image:"images/rec3.jpg"
},

{
    id:31,
    name:"Designer Reception Blouse",
    category:"Blouse",
    type:"Reception",
    heritage:"Modern",
    occasion:"Reception",
    price:2999,
    image:"images/rec4.jpg"
},

{
    id:32,
    name:"Reception Couple Wear",
    category:"Couple",
    type:"Reception",
    heritage:"Modern",
    occasion:"Reception",
    price:8999,
    image:"images/rec5.jpg"
},

{
    id:33,
    name:"Royal Bridal Saree",
    category:"Saree",
    type:"Bridal",
    heritage:"South Indian",
    occasion:"Bridal",
    price:14999,
    image:"images/bri1.jpg"
},

{
    id:34,
    name:"Kundan Bridal Set",
    category:"Jewellery",
    type:"Bridal",
    heritage:"North Indian",
    occasion:"Bridal",
    price:6999,
    image:"images/bi2.jpg"
},

{
    id:35,
    name:"Velvet Bridal Lehenga",
    category:"Lehenga",
    type:"Bridal",
    heritage:"North Indian",
    occasion:"Bridal",
    price:19999,
    image:"images/bri3.jpg"
},

{
    id:36,
    name:"Heavy Bridal Blouse",
    category:"Blouse",
    type:"Bridal",
    heritage:"South Indian",
    occasion:"Bridal",
    price:3999,
    image:"images/bri4.jpg"
},

{
    id:37,
    name:"Wedding Couple Collection",
    category:"Couple",
    type:"Bridal",
    heritage:"Traditional",
    occasion:"Bridal",
    price:14999,
    image:"images/bri5.jpg"
},

{
id:38,
name:"Royal Paithani Saree",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:7999,
image:"images/pai2.jpg"
},

{
id:39,
name:"Royal Purple Paithani Saree",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:8499,
image:"images/pai3.jpg"
},

{
id:40,
name:"Peacock Motif Paithani Saree",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:9499,
image:"images/pai4.jpg"
},

{
id:41,
name:"Lotus Border Paithani Saree",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:7999,
image:"images/pai5.jpg"
},

{
id:42,
name:"Traditional Green Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Festival",
price:8999,
image:"images/pai6.jpg"
},

{
id:43,
name:"Magenta Silk Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:7999,
image:"images/pai7.jpg"
},

{
id:44,
name:"Golden Zari Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Bridal",
price:11999,
image:"images/pai10.jpg"
},
{
id:45,
name:"Navy Blue Paithani Saree",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Reception",
price:7599,
image:"images/pai9.jpg"
}, 

{
id:46,
name:"Bridal Paithani Collection",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Bridal",
price:14999,
image:"images/pai8.jpg"
},
{
id:47,
name:"Wine Red Paithani Saree",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:8799,
image:"images/paii1.jpg"
},
{
id:48,
name:"Royal Maroon Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Bridal",
price:9999,
image:"images/paii2.jpg"
},
{
id:49,
name:"Pink Peacock Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Reception",
price:8299,
image:"images/paii3.jpg"
},
{
id:50,
name:"Orange Silk Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Festival",
price:7299,
image:"images/paii4.jpg"
},

{
id:51,
name:"Green Peacock Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:8899,
image:"images/paii5.jpg"
},

{
id:52,
name:"Classic Purple Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Reception",
price:9499,
image:"images/paii6.jpg"
},

{
id:53,
name:"Heritage Paithani Collection",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Bridal",
price:12999,
image:"images/paii7.jpg"
},

{
id:54,
name:"Golden Peacock Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Wedding",
price:10999,
image:"images/paii8.jpg"
},

{
id:55,
name:"Premium Bridal Paithani",
category:"Saree",
type:"Paithani",
heritage:"Maharashtrian",
occasion:"Bridal",
price:15999,
image:"images/paii9.jpg"
},
{
id:56,
name:"Traditional Nauvari Saree",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Wedding",
price:4999,
image:"images/navt.jpg"
},

{
id:57,
name:"Royal Silk Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Wedding",
price:7499,
image:"images/nav9.jpg"
},

{
id:58,
name:"Peacock Border Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Reception",
price:6999,
image:"images/navv3.jpg"
},

{
id:59,
name:"Green Wedding Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Wedding",
price:6599,
image:"images/navq.jpg"
},

{
id:60,
name:"Red Bridal Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Bridal",
price:11999,
image:"images/navp2.jpg"
},

{
id:61,
name:"Golden Zari Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Wedding",
price:7999,
image:"images/navg.jpeg"
},

{
id:62,
name:"Temple Special Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Temple",
price:5499,
image:"images/nav6.jpg"
},

{
id:63,
name:"Purple Silk Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Reception",
price:7299,
image:"images/nav8.jpg"
},

{
id:64,
name:"Festive Nauvari Collection",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Festival",
price:5999,
image:"images/navv1.jpg"
},

{
id:65,
name:"Heritage Nauvari Saree",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Traditional",
price:6499,
image:"images/nav7.jpg"
},

{
id:66,
name:"Pink Bridal Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Bridal",
price:10999,
image:"images/navp.jpg"
},

{
id:67,
name:"Royal Maroon Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Wedding",
price:8499,
image:"images/navv2.jpg"
},

{
id:68,
name:"Classic Green Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Festival",
price:5899,
image:"images/nav3.jpg"
},

{
id:69,
name:"Premium Wedding Nauvari",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Wedding",
price:9499,
image:"images/navpr.jpg"
},

{
id:70,
name:"Designer Nauvari Collection",
category:"Saree",
type:"Nauvari",
heritage:"Maharashtrian",
occasion:"Reception",
price:8999,
image:"images/navv15.jpg"
},
{
id:71,
name:"Royal Gold Kanjivaram Saree",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Wedding",
price:9999,
image:"images/kanji2.jpg"
},

{
id:72,
name:"Temple Border Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Temple",
price:8499,
image:"images/kanji3.jpg"
},

{
id:73,
name:"Bridal Red Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Bridal",
price:14999,
image:"images/kanji4.jpg"
},

{
id:74,
name:"Motif Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Wedding",
price:10999,
image:"images/kanji5.jpg"
},

{
id:75,
name:"Purple Silk Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Reception",
price:8999,
image:"images/kanji6.webp"
},

{
id:76,
name:"Traditional Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Festival",
price:7999,
image:"images/kanji7.jpg"
},

{
id:77,
name:"Wedding Special Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Wedding",
price:11999,
image:"images/kanji8.jpg"
},

{
id:78,
name:"Classic Maroon Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Reception",
price:9499,
image:"images/kanji9.jpg"
},

{
id:79,
name:"Golden Zari Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Wedding",
price:12999,
image:"images/kanji10.webp"
},

{
id:80,
name:"Royal Blue Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Festival",
price:8999,
image:"images/kanji11.jpg"
},

{
id:81,
name:"Bridal Silk Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Bridal",
price:15999,
image:"images/kanji12.webp"
},

{
id:82,
name:"Heritage Kanjivaram Collection",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Traditional",
price:9999,
image:"images/kanji13.jpg"
},

{
id:83,
name:"Pink Wedding Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Wedding",
price:10999,
image:"images/kanji14.jpg"
},

{
id:84,
name:"Premium Temple Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Temple",
price:11999,
image:"images/kanji15.webp"
},

{
id:85,
name:"Luxury Bridal Kanjivaram",
category:"Saree",
type:"Kanjivaram",
heritage:"South Indian",
occasion:"Bridal",
price:18999,
image:"images/kanji16.jpg"
},
{
id:86,
name:"Rangmahal Banarasi Saree",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Wedding",
price:8499,
image:"images/ban2.jpg"
},

{
id:87,
name:"Jangla Banarasi Silk",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Bridal",
price:12999,
image:"images/ban1.jpg"
},

{
id:88,
name:"Kadhua Weave Banarasi",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Wedding",
price:11499,
image:"images/ban3.jpg"
},

{
id:89,
name:"Meenakari Banarasi Saree",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Reception",
price:9999,
image:"images/ban4.jpg"
},

{
id:90,
name:"Shikargah Banarasi Saree",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Traditional",
price:11999,
image:"images/ban5.jpg"
},

{
id:91,
name:"Tilfi Silk Banarasi",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Bridal",
price:13999,
image:"images/ban6.jpg"
},

{
id:92,
name:"Rani Butidar Banarasi",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Wedding",
price:9599,
image:"images/ban7.jpg"
},

{
id:93,
name:"Ambi Motif Banarasi",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Reception",
price:8999,
image:"images/ban8.jpg"
},

{
id:94,
name:"Kadambari Banarasi Silk",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Wedding",
price:10499,
image:"images/ban9.jpg"
},

{
id:95,
name:"Gulbahar Banarasi Saree",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Reception",
price:9299,
image:"images/ban10.jpg"
},

{
id:96,
name:"Ratnajali Banarasi Weave",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Bridal",
price:14499,
image:"images/ban11.jpg"
},

{
id:97,
name:"Panna Jaal Banarasi",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Wedding",
price:10299,
image:"images/ban12.jpg"
},

{
id:98,
name:"Heritage Buta Banarasi",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Traditional",
price:9499,
image:"images/ban13.jpg"
},

{
id:99,
name:"Madhubani Inspired Banarasi",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Reception",
price:10999,
image:"images/ban14.jpg"
},

{
id:100,
name:"Rajgharana Banarasi Silk",
category:"Saree",
type:"Banarasi",
heritage:"North Indian",
occasion:"Bridal",
price:14999,
image:"images/ban15.jpg"
},

{
id:101,
name:"Double Ikat Patola Saree",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Wedding",
price:15999,
image:"images/pat1.jpg"
},

{
id:102,
name:"Navratna Patola Weave",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Traditional",
price:14499,
image:"images/pat2.jpg"
},

{
id:103,
name:"Nari Kunjar Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Wedding",
price:16999,
image:"images/pat3.jpg"
},

{
id:108,
name:"Traditional Rajkot Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Traditional",
price:12999,
image:"images/pat8.jpg"
},

{
id:109,
name:"Lotus Grid Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Reception",
price:14599,
image:"images/pat9.jpg"
},

{
id:111,
name:"Heritage Ikat Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Traditional",
price:15499,
image:"images/pat11.jpg"
},

{
id:112,
name:"Floral Jaal Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Reception",
price:13999,
image:"images/pat12.jpg"
},

{
id:113,
name:"Patan Classic Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Wedding",
price:17999,
image:"images/pat13.jpg"
},

{
id:114,
name:"Geometric Ikat Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Festival",
price:12499,
image:"images/pat14.jpg"
},

{
id:115,
name:"Royal Patan Patola",
category:"Saree",
type:"Patola",
heritage:"Gujarati",
occasion:"Bridal",
price:18999,
image:"images/pat15.jpg"
},
{
id:126,
name:"Floral Organza Saree",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Reception",
price:4999,
image:"images/org1.jpg"
},

{
id:127,
name:"Pastel Organza Saree",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Wedding",
price:5299,
image:"images/org2.jpg"
},

{
id:128,
name:"Embroidered Organza Saree",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Reception",
price:6499,
image:"images/org3.jpg"
},

{
id:129,
name:"Floral Border Organza",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Festival",
price:4799,
image:"images/org4.jpg"
},

{
id:130,
name:"Pearl Work Organza Saree",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Sangeet",
price:6999,
image:"images/org5.jpg"
},

{
id:131,
name:"Digital Print Organza",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Casual",
price:3999,
image:"images/org6.jpg"
},

{
id:132,
name:"Ruffle Organza Saree",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Party",
price:5999,
image:"images/org7.jpg"
},

{
id:133,
name:"Handpainted Organza Saree",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Reception",
price:7499,
image:"images/org8.jpg"
},

{
id:134,
name:"Organza",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Mehendi",
price:6499,
image:"images/org9.jpg"
},

{
id:135,
name:"Designer Organza Saree",
category:"Saree",
type:"Organza",
heritage:"Modern",
occasion:"Wedding",
price:7999,
image:"images/org10.jpg"
},
{
id:136,
name:"Midnight Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Sangeet",
price:6999,
image:"images/seq1.jpg"
},

{
id:137,
name:"Rose Gold Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Reception",
price:7499,
image:"images/seq2.jpg"
},

{
id:138,
name:"Champagne Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Cocktail",
price:7999,
image:"images/seq3.jpg"
},

{
id:139,
name:"Ombre Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Party",
price:6499,
image:"images/seq4.jpg"
},

{
id:140,
name:"Pearl Embellished Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Reception",
price:8599,
image:"images/seq.jpg"
},

{
id:141,
name:"Mirror Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Sangeet",
price:7299,
image:"images/seq6.jpg"
},

{
id:142,
name:"Shimmer Drape Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Cocktail",
price:6999,
image:"images/seq7.jpg"
},

{
id:143,
name:"Designer Party Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Party",
price:8999,
image:"images/seq8.jpg"
},

{
id:144,
name:"Crystal Work Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Reception",
price:9499,
image:"images/seq9.jpg"
},

{
id:145,
name:"Statement Sequin Saree",
category:"Saree",
type:"Sequin",
heritage:"Modern",
occasion:"Cocktail",
price:8299,
image:"images/seq10.jpg"
},
{
id:146,
name:"Floral Print Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Casual",
price:2999,
image:"images/geo1.jpg"
},

{
id:147,
name:"Embroidered Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Reception",
price:4999,
image:"images/geo2.jpg"
},

{
id:148,
name:"Designer Party Georgette",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Party",
price:5499,
image:"images/geo3.jpg"
},

{
id:149,
name:"Leheriya Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Rajasthani",
occasion:"Festival",
price:3999,
image:"images/geo4.jpg"
},

{
id:150,
name:"Stone Work Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Sangeet",
price:6499,
image:"images/geo5.jpg"
},

{
id:151,
name:"Foil Print Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Party",
price:4599,
image:"images/geo6.jpg"
},

{
id:152,
name:"Ruffle Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Reception",
price:6999,
image:"images/geo7.jpg"
},

{
id:153,
name:"Mirror Work Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Gujarati",
occasion:"Mehendi",
price:5999,
image:"images/geo8.jpg"
},

{
id:154,
name:"Digital Print Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Casual",
price:3499,
image:"images/geo9.jpg"
},

{
id:155,
name:"Ready To Wear Georgette Saree",
category:"Saree",
type:"Georgette",
heritage:"Modern",
occasion:"Party",
price:7499,
image:"images/geo10.jpg"
},
{
id:156,
name:"Traditional Temple Necklace Set",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Wedding",
price:4999,
image:"images/temp1.jpg"
},

{
id:157,
name:"Lakshmi Temple Haram",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Bridal",
price:6999,
image:"images/temp2.jpg"
},

{
id:158,
name:"Antique Temple Choker",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Wedding",
price:3499,
image:"images/temp3.jpg"
},

{
id:159,
name:"Temple Coin Necklace",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Traditional",
price:2999,
image:"images/temp4.jpg"
},

{
id:160,
name:"Temple Jewellery Bridal Set",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Bridal",
price:8999,
image:"images/temp5.jpg"
},

{
id:161,
name:"Peacock Temple Necklace",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Wedding",
price:5499,
image:"images/temp6.jpg"
},

{
id:162,
name:"Temple Jhumka Set",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Festival",
price:2499,
image:"images/temp7.jpg"
},

{
id:163,
name:"Temple Long Haram",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Bridal",
price:7499,
image:"images/temp8.jpg"
},

{
id:164,
name:"Goddess Motif Temple Set",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Wedding",
price:26499,
image:"images/temp9.jpg"
},

{
id:165,
name:"Heritage Temple Jewellery",
category:"Jewellery",
type:"Temple",
heritage:"South Indian",
occasion:"Traditional",
price:5999,
image:"images/temp10.jpg"
},
{
id:166,
name:"Classic Kundan Necklace Set",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Wedding",
price:5999,
image:"images/kun1.jpg"
},

{
id:167,
name:"Bridal Kundan Choker",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Bridal",
price:7499,
image:"images/kun2.jpg"
},

{
id:168,
name:"Layered Kundan Haar",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Reception",
price:6999,
image:"images/kun3.jpg"
},

{
id:169,
name:"Pearl Kundan Set",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Wedding",
price:6499,
image:"images/kun4.jpg"
},

{
id:170,
name:"Royal Kundan Necklace",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Bridal",
price:8499,
image:"images/kun5.jpg"
},

{
id:171,
name:"Green Stone Kundan Set",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Reception",
price:46999,
image:"images/kun6.jpg"
},

{
id:172,
name:"Meenakari Kundan Jewellery",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Wedding",
price:7999,
image:"images/kun7.jpg"
},

{
id:173,
name:"Traditional Kundan Earrings",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Festival",
price:2999,
image:"images/kun8.jpg"
},

{
id:174,
name:"Statement Kundan Choker",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Sangeet",
price:5499,
image:"images/kun9.jpg"
},

{
id:175,
name:"Grand Bridal Kundan Set",
category:"Jewellery",
type:"Kundan",
heritage:"North Indian",
occasion:"Bridal",
price:69999,
image:"images/kun10.jpg"
},
{
id:176,
name:"Solitaire Diamond Necklace",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Reception",
price:12999,
image:"images/dia1.jpg"
},

{
id:177,
name:"Diamond Bridal Set",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Bridal",
price:18999,
image:"images/dia2.jpg"
},

{
id:178,
name:"Diamond Choker Set",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Reception",
price:14999,
image:"images/dia3.jpg"
},

{
id:179,
name:"Floral Diamond Necklace",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Wedding",
price:11999,
image:"images/dia4.jpg"
},

{
id:180,
name:"Diamond Drop Earrings",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Party",
price:5999,
image:"images/dia5.jpg"
},

{
id:181,
name:"Contemporary Diamond Set",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Reception",
price:13999,
image:"images/dia6.jpg"
},

{
id:182,
name:"Diamond Tennis Necklace",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Wedding",
price:15999,
image:"images/dia7.jpg"
},

{
id:183,
name:"Luxury Diamond Jewellery Set",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Bridal",
price:21999,
image:"images/dia8.jpg"
},

{
id:184,
name:"Diamond Pendant Collection",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Casual",
price:4999,
image:"images/dia9.jpg"
},

{
id:185,
name:"Statement Diamond Necklace",
category:"Jewellery",
type:"Diamond",
heritage:"Modern",
occasion:"Reception",
price:16999,
image:"images/dia10.jpg"
},
{
id:186,
name:"Traditional Gold Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"Indian",
occasion:"Festival",
price:1499,
image:"images/jhum1.jpg"
},

{
id:187,
name:"Temple Jhumka Earrings",
category:"Jewellery",
type:"Jhumka",
heritage:"South Indian",
occasion:"Wedding",
price:1999,
image:"images/jhum2.jpg"
},

{
id:188,
name:"Kundan Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"North Indian",
occasion:"Wedding",
price:2499,
image:"images/jhum3.jpg"
},

{
id:189,
name:"Pearl Drop Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"Modern",
occasion:"Reception",
price:1799,
image:"images/jhum4.jpg"
},

{
id:190,
name:"Oxidised Silver Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"Boho",
occasion:"Casual",
price:999,
image:"images/jhum5.jpg"
},

{
id:191,
name:"Mirror Work Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"Gujarati",
occasion:"Mehendi",
price:1499,
image:"images/jhum6.jpg"
},

{
id:192,
name:"Lotus Design Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"Indian",
occasion:"Festival",
price:1699,
image:"images/jhum7.jpg"
},

{
id:193,
name:"Chandbali Style Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"Mughal",
occasion:"Wedding",
price:2299,
image:"images/jhum8.jpg"
},

{
id:194,
name:"Antique Finish Jhumkas",
category:"Jewellery",
type:"Jhumka",
heritage:"Indian",
occasion:"Traditional",
price:1899,
image:"images/jhum9.jpg"
},

{
id:195,
name:"Bridal Jhumka Collection",
category:"Jewellery",
type:"Jhumka",
heritage:"Indian",
occasion:"Bridal",
price:2999,
image:"images/jhum10.jpg"
},
{
id:196,
name:"Pearl Choker Set",
category:"Jewellery",
type:"Choker",
heritage:"Modern",
occasion:"Reception",
price:3499,
image:"images/cgok1.jpg"
},

{
id:197,
name:"Kundan Choker Necklace",
category:"Jewellery",
type:"Choker",
heritage:"North Indian",
occasion:"Wedding",
price:4999,
image:"images/chok2.jpg"
},

{
id:198,
name:"Temple Choker Set",
category:"Jewellery",
type:"Choker",
heritage:"South Indian",
occasion:"Bridal",
price:5499,
image:"images/chok3.jpg"
},

{
id:199,
name:"Polki Choker Necklace",
category:"Jewellery",
type:"Choker",
heritage:"Rajput",
occasion:"Wedding",
price:6499,
image:"images/chok4.jpg"
},

{
id:200,
name:"Floral Choker Set",
category:"Jewellery",
type:"Choker",
heritage:"Modern",
occasion:"Haldi",
price:1299,
image:"images/chok5.jpg"
},

{
id:201,
name:"Stone Studded Choker",
category:"Jewellery",
type:"Choker",
heritage:"Modern",
occasion:"Sangeet",
price:2999,
image:"images/chok6.jpg"
},

{
id:202,
name:"Emerald Choker Necklace",
category:"Jewellery",
type:"Choker",
heritage:"Modern",
occasion:"Reception",
price:6999,
image:"images/chok7.jpg"
},

{
id:203,
name:"Layered Bridal Choker",
category:"Jewellery",
type:"Choker",
heritage:"Indian",
occasion:"Bridal",
price:7999,
image:"images/chok8.jpg"
},

{
id:204,
name:"Victorian Choker Set",
category:"Jewellery",
type:"Choker",
heritage:"Modern",
occasion:"Reception",
price:5999,
image:"images/chok9.jpg"
},

{
id:205,
name:"Statement Party Choker",
category:"Jewellery",
type:"Choker",
heritage:"Modern",
occasion:"Party",
price:2499,
image:"images/chok10.jpg"
},
{
id:181,
name:"Traditional Oxidised Choker Set",
category:"Jewellery",
type:"Oxidised",
heritage:"Rajasthani",
occasion:"Festival",
price:1499,
image:"images/oxi1.jpg"
},

{
id:182,
name:"Mirror Oxidised Necklace",
category:"Jewellery",
type:"Oxidised",
heritage:"Gujarati",
occasion:"Mehendi",
price:1799,
image:"images/oxi2.jpg"
},

{
id:183,
name:"Antique Oxidised Jewellery Set",
category:"Jewellery",
type:"Oxidised",
heritage:"Traditional",
occasion:"Garba Event",
price:1999,
image:"images/oxi3.jpg"
},

{
id:184,
name:"Boho Oxidised Necklace",
category:"Jewellery",
type:"Oxidised",
heritage:"Contemporary",
occasion:"Casual",
price:1299,
image:"images/oxi4.jpg"
},

{
id:185,
name:"Oxidised Coin Necklace Set",
category:"Jewellery",
type:"Oxidised",
heritage:"South Indian",
occasion:"Festival",
price:2699,
image:"images/oxi5.jpg"
},

{
id:186,
name:"Oxidised Peacock Jewellery Set",
category:"Jewellery",
type:"Oxidised",
heritage:"Traditional",
occasion:"Wedding",
price:2199,
image:"images/oxi6.jpg"
},

{
id:187,
name:"Tribal Oxidised Necklace",
category:"Jewellery",
type:"Oxidised",
heritage:"Tribal",
occasion:"Festival",
price:1899,
image:"images/oxi7.jpg"
},

{
id:188,
name:"Oxidised Layered Necklace",
category:"Jewellery",
type:"Oxidised",
heritage:"Modern Ethnic",
occasion:"Casual",
price:2399,
image:"images/oxi8.jpg"
},

{
id:189,
name:"Vintage Oxidised Jewellery Set",
category:"Jewellery",
type:"Oxidised",
heritage:"Traditional",
occasion:"Reception",
price:2499,
image:"images/oxi9.jpg"
},

{
id:190,
name:"Statement Oxidised Choker",
category:"Jewellery",
type:"Oxidised",
heritage:"Bohemian",
occasion:"Sangeet",
price:1599,
image:"images/oxi10.jpg"
},
{
id:191,
name:"Classic Black Bead Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"Traditional",
occasion:"Wedding",
price:2499,
image:"images/man1.jpg"
},

{
id:192,
name:"Gold Plated Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"Maharashtrian",
occasion:"Wedding",
price:2999,
image:"images/man2.jpg"
},

{
id:193,
name:"Diamond Touch Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"Modern",
occasion:"Reception",
price:3499,
image:"images/man3.jpg"
},

{
id:194,
name:"Daily Wear Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"Contemporary",
occasion:"Casual",
price:1899,
image:"images/man4.jpg"
},

{
id:195,
name:"Double Chain Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"Traditional",
occasion:"Wedding",
price:2799,
image:"images/man5.jpg"
},

{
id:196,
name:"Peacock Design Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"South Indian",
occasion:"Festival",
price:3199,
image:"images/man6.jpg"
},

{
id:197,
name:"Minimalist Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"Modern",
occasion:"Casual",
price:1599,
image:"images/man7.jpg"
},

{
id:198,
name:"Royal Bridal Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"Traditional",
occasion:"Bridal",
price:4499,
image:"images/man8.jpg"
},

{
id:199,
name:"Temple Inspired Mangalsutra",
category:"Jewellery",
type:"Mangalsutra",
heritage:"South Indian",
occasion:"Wedding",
price:3899,
image:"images/man9.jpg"
},

{
id:200,
name:"Kundan Mangalsutra Set",
category:"Jewellery",
type:"Mangalsutra",
heritage:"North Indian",
occasion:"Reception",
price:3599,
image:"images/man10.jpg"
},
];