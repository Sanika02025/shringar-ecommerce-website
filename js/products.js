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
}

];