import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function Pokosova_pila() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Pokosová pila</Text>
      <Text style={styles.heading2}>Úvod a popis nástroje</Text>
      <Text style={styles.paragraph}>
      Pokosová pila je ideálním nástrojem pro provádění přesných řezů. Pokud potřebujeme uříznout například prkna nebo hranolky do přesné délky a případně i pod určitým úhlem, je pokosová pila správnou volbou.
Skládá se z kotouče pily o různé velikosti, nastavitelného úhelníku a základny se svěrkou k uchycení materiálu při řezání, madla a dalších zajišťovacích prvků proti úrazu.      </Text>
    <Text style={styles.heading2}>Druhy pil</Text>
    <Text style={styles.heading3}>Sklopné pily</Text>
    <Text style={styles.paragraph}>- tyto pily nabízejí omezený rozsah pohybu pouze na sklopení a velikost prořezu je tak závislá na velikosti pily.

Z pravidla jsou levnější a lehčí, ale s menší možností řezu.</Text>
<Text style={styles.heading3}>Pily s pojezdem</Text>
<Text style={styles.paragraph}>- Jak je vidět na obrázku výše, mnoho lepších pokosových pil obsahuje pojezd. Ten umožňuje delší rozsah průřezu pro širší materiály

Za vyšší cenu a hmotnost dostanete větší variabilitu a často i větší kotouč pro větší prořez.</Text>
<Text style={styles.heading2}>Vlastnosti</Text>
<Text style={styles.paragraph}>Velikost kotouče

- čím větší kotouč, tím hlubší prořez a tím možnost řezat tlustší materiály

Nastavení úhlu

- rozsah úhlu, pod kterým je možné materiál řezat, zpravidla do 50 stupňů na obě strany

Nastavení úkosu

- možnost položení pily do úkosu

Nástroje pro přesnost řezu

- mnoho pil disponuje pravítky na základně pily
- často obsahují i laserovou linii pro přesné provedení řezu nebo přídavná světla

Příkon a počet otáček pily

- čím vyšší příkon, tím větší síla pily a tím pohodlnější možnost řezání i tvrdších dřev a materiálů
- čím vyšší otáčky, tím čistější řez materiálem

Materiál k řezání

- krom pokosových pil na dřevo existují i na kov a další materiály</Text>
<Text style={styles.heading2}>Výhody a nevýhody těchto pil</Text>
<Text style={styles.heading3}>Výhody</Text>
<Text style={styles.paragraph}>- přesnost řezu
- bezpečnost řezání
- spolehlivost
- jednoduché ovládání i pro nezkušeného uživatele</Text>
<Text style={styles.heading3}>Nevýhody</Text>
<Text style={styles.paragraph}>- nízká variabilita - nutnost položení na rovnou plochu i s materiálem
- často malý prořez
- pomalejší práce
    - vyšší pořizovací cena</Text>
    <Text style={styles.heading3}>Zajímavost na závěr: Předchůdcem pokosové pily je ruční pokosník.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#baa89b', // Apply background color here
      },
      contentContainer: {
        padding: 16,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#523a28',
    textAlign: 'center',
  },
  heading2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#294532',
    textAlign: 'left',
    marginTop: 10,
  },
  heading3: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#294532',
    textAlign: 'left',
    marginTop: 6,
  },
  paragraph: {
    fontSize: 14,
    color: '#333333',
  },
});
