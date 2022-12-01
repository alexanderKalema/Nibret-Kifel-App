import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import GlobalText from '../global/global_text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export default function Rules() {

  const{pop}= useNavigation();

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => pop()}>
        <Ionicons name="arrow-back" size={50} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <View style={{flex: 5}}>
          <View style={Styles.title}>
            <GlobalText
              mylabel={'•	የንብረት መዋስን በተመለከተ'}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 20}}
            />
          </View>
          <ScrollView>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.1. 	ክፍሉ በዓመቱ በሚታወቁ ቀናቶች ማለትም ለንግስ በዓላት፣ የሰንበት ት/ቤቱ ቋሚ መርሐግብሮች ላይ በቋሚነት ንብረቶችን የሚዋስ ከሆነ አስቀድሞ በዓመቱ መጀመሪያ ላይ ለንብረት ክፍሉ የሚፈልገውን የንብረት ዓይነት፣ ንብረቶቹ የሚፈለጉበትን ቀን እና ሰዓት በመጥቀስ ዝርዝር ማቅረብ ይኖርበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.2.	ከሚታወቁ ቋሚ የሆኑ አገልግሎቶች ወጪ የሆኑ አገልግሎቶች (ምሣሌ የሠርግ አገልግሎት፣ የጉዞ...) ሲኖሩ ቀኑን 1 ሳምንት ቀድሞ ማሳወቅ  ይኖርበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.3.	በቁ 1.1 እና 1.2 ላይ ያሉትን ህጎች ያልጠበቀ ክፍል በአገልግሎቱ ቀን መጥቶ ባለመስተናገዱ ለሚደርሰው የአገልግሎት መስተጓጎል ክፍሉ ተጠያቂ አይሆንም።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.4.	ንብረቶችን መዋስ የሚችለው የሰ/ት/ቤቱ ክፍል ብቻ ነው ይህ ማለት ንብረት በግለሰብ ደረጃ ክፍሉ ሳይፈቅድ መዋስ አይቻልም።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.5.	አንድ ክፍል የሰ/ት/ቤቱን ንብረት መዋስ ሲፈልግ በንበረት ክፍሉ ከተፈቀደለት በኋላ የክፍሉ አባል (ተወካይ) በአካል ተገኝቶ በተጠየቀው ዝርዝር መሠረት ንብረቱን ቆጥሮ እንዲሁም በተዘጋጀው ፎርም ላይ ፈርሞ መረከብ አለበት።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>

            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={'1.6.	ንብረትን የተዋሰ ክፍል ንብረቶችን ለሌላ አካል ማዋስ አይችልም።'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={'1.7.	ማንኛውንም ንብረት መዋስ የሚቻለው ከንብረት ክፍሉ አባል ብቻ ነው።'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.8.	አንድ ክፍል የሰ/ት/ቤቷን ንብረት ከተዋሰ በኋላ የተዋሰው ንብረት ለረጅም ጊዜ ያገለግል ዘንድ በጥንቃቄ እና በአግባቡ መጠቀም አለበት።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.9.	ለመንፈሳዊ አገልግሎት የምንጠቀምባቸውን ንዋያተ ቅድሳትን በተለየ ክብር ሊገለገልባቸው ይገባል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.10.	የተዋሱት ንብረት ከአገልግሎት በኋላ መታጠብ ያለባቸው ከሆኑ የተዋሰው ክፍል ንጹህ አድርጎ መመለስ ይጠበቅበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.11.	ማንኛውንም የሰ/ት/ቤቱን ንብረት ከቤተ ክርስቲያን ወጪ ለአገልግሎት ካልሆነ በቀር ያለ ንብረት ክፍሉ እውቅና ወደቤቱም ሆነ ወደሌላ ቦታ ወስዶ ማስቀመጥ አይችልም።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.12.	የሰንበት ት/ቤቱን ንብረት የተዋሰ ክፍል አገልግሎቶችን ከፈጸመ በኋላ በሚቀጥለው የጊዜ ገደብ መመለስ ይጠበቅበታል'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subsubtitle}>
              <GlobalText
                mylabel={'•  ልብሰ ስብሃት'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={'-	በጥምቀት አገልግሎት ጊዜ-  ጥር 14'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={'-	ከጥምቀት አገልግሎት ውጪ- የቀን አገልግሎት ከሆነ- በዕለቱ'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={
                  '-	የሠርክ አገልግሎት ወይም አገልግሎቱ ከምሽቱ 12 ሰዓት በኋላ የሚያስቆይ ከሆነ- በማግስቱ'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>

            <View style={Styles.subsubtitle}>
              <GlobalText
                mylabel={'• 	የምግብ ዕቃዎች'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={'-	በትንሳኤ እና የፍልሰታ መርሐግብር ላይ- በአምስት ቀን ውስጥ'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={'-	በሌሎች መርሐግብሮች- እስከ 1 ቀን'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subsubtitle}>
              <GlobalText
                mylabel={'• 	ሌሎች ንብረቶች - በዕለቱ'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>

            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.13.	የተዋሰውን ንብረት መመለስ ያለበት ከተቻለ የተዋሰው የክፍሉ ተወካይ እሱ/ሷ መገኘት የማይችሉ ከሆነ ግን ሌላ የክፍሉ አባል መገኘት ይጠበቅበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.14.	ንብረቶችን ለመመለስ የሚገኝ የክፍል ተወካይ የተዋሰው ንበረት ባለው የንበረት ክፍሉ አባል ሙሉ መሆናቸውን ከተረጋገጠ በኋላ የፈረመውን ማሰረዝ አለበት።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '1.5.	አንድ ክፍል የሰ/ት/ቤቱን ንብረት መዋስ ሲፈልግ በንበረት ክፍሉ ከተፈቀደለት በኋላ የክፍሉ አባል (ተወካይ) በአካል ተገኝቶ በተጠየቀው ዝርዝር መሠረት ንብረቱን ቆጥሮ እንዲሁም በተዘጋጀው ፎርም ላይ ፈርሞ መረከብ አለበት።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
          </ScrollView>
        </View>

        <View style={{flex: 3}}>
          <View style={Styles.title}>
            <GlobalText
              mylabel={'• የጠፉ/ የተበላሹ ንብረቶችን በተመለከተ'}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 20}}
            />
          </View>
          <ScrollView>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={'2.1.	ንብረቶች ሲጠፉ እና ሲጎዱ ተጠያቂው የተዋሰው የክፍሉ ሙሉ አባላት ይሆናሉ።'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '2.2.	አንድን ንብረት የተዋሰው ክፍል የተዋሰው ንብረት ቢጠፋ ክፍሉ ተጠያቂ ይሆናል። የጠፋውም ንብረት በ2 ሳምንት ጊዜ ውስጥ በክፍሉ አባላት ተገዝቶ መተካት ይኖርበታል። ይህን ሳያደርግ ሌላ ንበረት መዋስ አይችልም።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '2.3.	አንድ ክፍል የተዋሰው ንብረት ከተዋሰ በኋላ ቢጎዳ በ2 ሳምንት ጊዜ ውስጥ ንብረቱ የሚጠገን ከሆነ መጠገን ካልሆነ ግን በአዲስ መተካት ይጠበቅበታል። ይሄንን ሳያደርግ ሌላ ንብረት መዋስ አይችልም።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '2.4.	ንብረቱን የተዋሰው አካል ከላይ በቁ. 1.11 ላይ እንደተቀመጠው ንብረቶቹን በተቀመጠው ጊዜ ካልመለሰ የ500 ብር ቅጣት ይቀጣል። በተጨማሪም ንብረቶቹ ላይ ለሚደርሰው ጥፋት ተጠያቂ ይሆናል። ከሁለት ጊዜ በላይ በጊዜው የተዋሰውን ንብረት የማይመልስ ክፍል'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
          </ScrollView>
        </View>

        <View style={{flex: 2}}>
          <View style={Styles.title}>
            <GlobalText
              mylabel={'•	ለሁሉም አባላት'}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 20}}
            />
          </View>
          <ScrollView>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '3.1 	ማንኛውም የሰ/ት/ቤቱ አባል ከንብረት ክፍል አባላት ወጪ የሰ/ት/ቤቱን ንብረት ማዋስ አይችልም። ይህ ሆኖ ቢገኝ እና ንብረቶቹ ላይ ጥፋት ቢደርስ ለጥፋቱ ሙሉ ለሙሉ ተጠያቂ ሆኖ ወጪውን ሸፍኖ ይተካል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '3.2	ማንኛውንም የሰ/ት/ቤት ንብረት ከሰንበት ት/ቤቱ አገልግሎት ውጪ ለሌላ መጠቀም አይቻልም።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={'3.3	የሰ/ት/ቤቱን ንብረት በተቻለ አቅም በጥንቃቄ መጠቀም ይገባል።'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
          </ScrollView>
        </View>

        <View style={{flex: 2}}>
          <View style={Styles.title}>
            <GlobalText
              mylabel={'•	ለንብረት ክፍል አባላት'}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 20}}
            />
          </View>
          <ScrollView>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={'4.1 	በንብረት ማዋስ ጊዜ'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={
                  '-	በንብረት ማዋስ ጊዜ በዕለቱ የተመደበው የንብረት ክፍሉ አባል በዕለቱ መገኘት ይጠበቅበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>

            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={
                  '-	ንብረቱን ከማዋሱ በፊት መቁጠር፣ የሚያስረክበውን ንብረት ዝርዝርም በተገቢው ቦታ ላይ መጻፍ ከዛም ተረካቢውን ክፍል ማስፈረም ይጠበቅበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={
                  '-	ንበረቶች በሚመለሱ ጊዜ ከታቸለ 2 ካልሆነ ግን አንድ የንበረት ክፍል አባል ተገኝቶ መረከብ ይጠበቅበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={
                  '-	ንብረቶችን በመረከብ ጊዜ ሁሉም ንብረቶች መኖራቸውን እና ደኅንነታቸውን ማየት ይጠበቅበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.triplesub}>
              <GlobalText
                mylabel={
                  '-	አንድ ንብረት የተጎዳ ወይም የጠፋ ከሆነ በተቀመጠው ፎርም ላይ በተገቢው ሁኔታ መመዝገብ ይጠበቅበታል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
          </ScrollView>
        </View>

        <View style={{flex: 2}}>
          <View style={Styles.title}>
            <GlobalText
              mylabel={'•	ወንበሮችን በተመለከተ'}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 20}}
            />
          </View>
          <ScrollView>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '5.1 	ማንኛውም የሰ/ት/ቤቱ ክፍል ለአገልግሎት ወንበሮችን ካሉበት ክፍል ወስጥ ካወጣ የመመለስ ግዴታ አለበት። ይህ ሳይሆን ቀርቶ ወንበሮቹ ቢጠፉ ወይም ጉዳት ቢደርስባቸው ተጠያቂ ይሆናል።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={
                  '5.2	ማንኛውም አባል ከንብረት ክፍል እውቅና ውጪ የሰ/ት/በቱን ወንበር ለሌላ አካል ማበደር አይችልም።'
                }
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
            <View style={Styles.subtitle}>
              <GlobalText
                mylabel={'5.3	የሰ/ት/ቤቱን ንብረት በተቻለ አቅም በጥንቃቄ መጠቀም ይገባል።'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 12}}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  title: {
    marginVertical: 10,
  },
  subtitle: {
    paddingHorizontal: 20,
    marginVertical: 5,
  },

  subsubtitle: {
    paddingHorizontal: 40,
    marginVertical: 5,
  },
  triplesub: {
    paddingHorizontal: 60,
    marginVertical: 5,
  },
});
