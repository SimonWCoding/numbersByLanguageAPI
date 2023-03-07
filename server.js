const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let numberList = {
    'korean':{
        'one':{
            'hangul':'일',
            'romanised': 'il'
        },
        'two':{
            'hangul':'이',
            'romanized': 'i'
        },
        'three':{
            'hangul':'삼',
            'romanized': 'sam'
        },
        'four':{
            'hangul':'사',
            'romanized': 'sa'
        },
        'five':{
            'hangul':'오',
            'romanized': 'o'
        },
        'six':{
            'hangul':'육',
            'romanized': 'yuk'
        },
        'seven':{
            'hangul':'칠',
            'romanized': 'chil'
        },
        'eight':{
            'hangul':'팔',
            'romanized': 'pal'
        },
        'nine':{
            'hangul':'구',
            'romanized': 'gu'
        },
        'ten':{
            'hangul':'십',
            'romanized': 'sip'
        },
        'eleven':{
            'hangul':'십일',
            'romanized': 'sipil'
        },
        'twelve':{
            'hangul':'십이',
            'romanized': 'sipi'
        },
        'thirteen':{
            'hangul':'십삼',
            'romanized': 'sipsam'
        },
        'fourteen':{
            'hangul':'십사',
            'romanized': 'sipsa'
        },
        'fifteen':{
            'hangul':'십오',
            'romanized': 'sipo'
        },
        'sixteen':{
            'hangul':'십육',
            'romanized': 'sipyuk'
        },
        'seventeen':{
            'hangul':'십칠',
            'romanized': 'sipchil'
        },
        'eighteen':{
            'hangul':'십팔',
            'romanized': 'sippal'
        },
        'nineteen':{
            'hangul':'십구',
            'romanized': 'sipgu'
        },
        'twenty':{
            'hangul':'이십',
            'romanized': 'isip'
        },
        'twentyone':{
            'hangul':'이십일',
            'romanized': 'isipil'
        },
        'twentytwo':{
            'hangul':'이십이',
            'romanized': 'isipi'
        },
        'twentythree':{
            'hangul':'이십삼',
            'romanized': 'isipsam'
        },
        'twentyfour':{
            'hangul':'이십사',
            'romanized': 'isipsa'
        },
        'twentyfive':{
            'hangul':'이십오',
            'romanized': 'isipo'
        },
        'twentysix':{
            'hangul':'이십육',
            'romanized': 'isipyuk'
        },
        'twentyseven':{
            'hangul':'이십칠',
            'romanized': 'isipchil'
        },
        'twentyeight':{
            'hangul':'이십팔',
            'romanized': 'isippal'
        },
        'twentynine':{
            'hangul':'이십구',
            'romanized': 'isipgu'
        },
        'thirty':{
            'hangul':'삼십',
            'romanized': 'samsip'
        },
        'thirtyone':{
            'hangul':'삼십일',
            'romanized': 'samsipil'
        },
        'thirtytwo':{
            'hangul':'삼십이',
            'romanized': 'samsipi'
        },
        'thirtythree':{
            'hangul':'삼십삼',
            'romanized': 'samsipsam'
        },
        'thirtyfour':{
            'hangul':'삼십사',
            'romanized': 'samsipsa'
        },
        'thirtyfive':{
            'hangul':'삼십오',
            'romanized': 'samsipo'
        },
        'thirtysix':{
            'hangul':'삼십육',
            'romanized': 'samsipyuk'
        },
        'thirtyseven':{
            'hangul':'삼십칠',
            'romanized': 'samsipchil'
        },
        'thirtyeight':{
            'hangul':'삼십팔',
            'romanized': 'samsippal'
        },
        'thirtynine':{
            'hangul':'삼십구',
            'romanized': 'samsipgu'
        },
        'forty':{
            'hangul':'사십',
            'romanized': 'sasip'
        },
        'fortyone':{
            'hangul':'사십일',
            'romanized': 'sasipil'
        },
        'fortytwo':{
            'hangul':'사십이',
            'romanized': 'sasipi'
        },
        'fortythree':{
            'hangul':'사십삼',
            'romanized': 'sasipsam'
        },
        'fortyfour':{
            'hangul':'사십사',
            'romanized': 'sasipsa'
        },
        'fortyfive':{
            'hangul':'사십오',
            'romanized': 'sasipo'
        },
        'fortysix':{
            'hangul':'사십육',
            'romanized': 'sasipyuk'
        },
        'fortyseven':{
            'hangul':'사십칠',
            'romanized': 'sasipchil'
        },
        'fortyeight':{
            'hangul':'사십팔',
            'romanized': 'sasippal'
        },
        'fortynine':{
            'hangul':'사십구',
            'romanized': 'sasipgu'
        },
        'fifty':{
            'hangul':'오십',
            'romanized': 'osip'
        },
        'fiftyone':{
            'hangul':'오십일',
            'romanized': 'osipil'
        },
        'fiftytwo':{
            'hangul':'오십이',
            'romanized': 'osipi'
        },
        'fiftythree':{
            'hangul':'오십삼',
            'romanized': 'osipsam'
        },
        'fiftyfour':{
            'hangul':'오십사',
            'romanized': 'osipsa'
        },
        'fiftyfive':{
            'hangul':'오십오',
            'romanized': 'osipo'
        },
        'fiftysix':{
            'hangul':'오십육',
            'romanized': 'osipyuk'
        },
        'fiftyseven':{
            'hangul':'오십칠',
            'romanized': 'osipchil'
        },
        'fiftyeight':{
            'hangul':'오십팔',
            'romanized': 'osippal'
        },
        'fiftynine':{
            'hangul':'오십구',
            'romanized': 'osipgu'
        },
        'sixty':{
            'hangul':'육십',
            'romanized': 'yuksip'
        },
        'sixtyone':{
            'hangul':'육십일',
            'romanized': 'yuksipil'
        },
        'sixtytwo':{
            'hangul':'육십이',
            'romanized': 'yuksipi'
        },
        'sixtythree':{
            'hangul':'육십삼',
            'romanized': 'yuksipsam'
        },
        'sixtyfour':{
            'hangul':'육십사',
            'romanized': 'yuksipsa'
        },
        'sixtyfive':{
            'hangul':'육십오',
            'romanized': 'yuksipo'
        },
        'sixtysix':{
            'hangul':'육십육',
            'romanized': 'yuksipyuk'
        },
        'sixtyseven':{
            'hangul':'육십칠',
            'romanized': 'yuksipchil'
        },
        'sixtyeight':{
            'hangul':'육십팔',
            'romanized': 'yuksippal'
        },
        'sixtynine':{
            'hangul':'육십구',
            'romanized': 'yuksipgu'
        },
        'seventy':{
            'hangul':'칠십',
            'romanized': 'chilsip'
        },
        'seventyone':{
            'hangul':'칠십일',
            'romanized': 'chilsipil'
        },
        'seventytwo':{
            'hangul':'칠십이',
            'romanized': 'chilsipi'
        },
        'seventythree':{
            'hangul':'칠십삼',
            'romanized': 'chilsipsam'
        },
        'seventyfour':{
            'hangul':'칠십사',
            'romanized': 'chilsipsa'
        },
        'seventyfive':{
            'hangul':'칠십오',
            'romanized': 'chilsipo'
        },
        'seventysix':{
            'hangul':'칠십육',
            'romanized': 'chilsipyuk'
        },
        'seventyseven':{
            'hangul':'칠십칠',
            'romanized': 'chilsipchil'
        },
        'seventyeight':{
            'hangul':'칠십팔',
            'romanized': 'chilsippal'
        },
        'seventynine':{
            'hangul':'칠십구',
            'romanized': 'chilsipgu'
        },
        'eighty':{
            'hangul':'팔십',
            'romanized': 'palsip'
        },
        'eightyone':{
            'hangul':'팔십일',
            'romanized': 'palsipil'
        },
        'eightytwo':{
            'hangul':'팔십이',
            'romanized': 'palsipi'
        },
        'eightythree':{
            'hangul':'팔십삼',
            'romanized': 'palsipsam'
        },
        'eightyfour':{
            'hangul':'팔십사',
            'romanized': 'palsipsa'
        },
        'eightyfive':{
            'hangul':'팔십오',
            'romanized': 'palsipo'
        },
        'eightysix':{
            'hangul':'팔십육',
            'romanized': 'palsipyuk'
        },
        'eightyseven':{
            'hangul':'팔십칠',
            'romanized': 'palsipchil'
        },
        'eightyeight':{
            'hangul':'팔십팔',
            'romanized': 'palsippal'
        },
        'eightynine':{
            'hangul':'팔십구',
            'romanized': 'palsipgu'
        },
        'ninety':{
            'hangul':'구십',
            'romanized': 'gusip'
        },
        'ninetyone':{
            'hangul':'구십일',
            'romanized': 'gusipil'
        },
        'ninetytwo':{
            'hangul':'구십이',
            'romanized': 'gusipi'
        },
        'ninetythree':{
            'hangul':'구십삼',
            'romanized': 'gusipsam'
        },
        'ninetyfour':{
            'hangul':'구십사',
            'romanized': 'gusipsa'
        },
        'ninetyfive':{
            'hangul':'구십오',
            'romanized': 'gusipo'
        },
        'ninetysix':{
            'hangul':'구십육',
            'romanized': 'gusipyuk'
        },
        'ninetyseven':{
            'hangul':'구십칠',
            'romanized': 'gusipchil'
        },
        'ninetyeight':{
            'hangul':'구십팔',
            'romanized': 'gusippal'
        },
        'ninetynine':{
            'hangul':'구십구',
            'romanized': 'gusipgu'
        },
        'onehundred':{
            'hangul':'백',
            'romanized': 'baek'
        }

        
    },
    'unknown': 'Please try again or try another language' 
}



app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')

})

app.get('/api/:language', (request, response) => {
    const languageSelection = request.params.language.toLowerCase()
    if(numberList[languageSelection]){
        response.json(numberList[languageSelection])
    }else{
        response.json(numberList['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})