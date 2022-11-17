import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.cima}>


        <View style={styles.cima1} >
          <View style={styles.icones}>
          <View style={styles.espaco1}><AntDesign style={styles.icone1} name="arrowleft" size={35} color="#fff" />
          </View>
          <View style={styles.espaco2}><Ionicons style={styles.icone2} name="ios-reorder-three-outline" size={35} color="#fff" />
          </View>  
          </View>
        </View>

        <View style={styles.cima2} >
          <View style={styles.titulos}>

            <View style={styles.quadradin}>
              <Text style={styles.texto} >Designer</Text>
              <View style={styles.marcacao} ></View>
            </View>
            <View style={styles.quadradin}>
              <Text style={styles.texto2} >Category</Text>
            </View>
            <View style={styles.quadradin}>
              <Text style={styles.texto2} >Attention</Text>
            </View>
          </View>
        </View>
      </View>
      
      

      <View style={styles.perfil.op1}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>David Borg</Text>
            <Text style={styles.title }>Title: Flying wings</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>1</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>


      <View style={styles.perfil.op2}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>Lucy</Text>
            <Text style={styles.title }>Title: Growing up trouble</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>2</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>


      <View style={styles.perfil.op3}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>Jerry Cool West</Text>
            <Text style={styles.title }>Title: Sculptors diary</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>3</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>


      <View style={styles.perfil.op4}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>Bold</Text>
            <Text style={styles.title }>Title: Illustration of little girl</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>4</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>


      <View style={styles.perfil.op5}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>David Borg</Text>
            <Text style={styles.title }>Title: Flying wings</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>5</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>


      <View style={styles.perfil.op1}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>Lucy</Text>
            <Text style={styles.title }>Title: Growing up trouble</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>6</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>


      <View style={styles.perfil.op2}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>Jerry Cool West</Text>
            <Text style={styles.title }>Title: Sculptors diary</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>7</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>


      <View style={styles.perfil.op3}>
        <View style={styles.perfil1}><Ionicons style={styles.foto} name="person-circle-sharp" size={55} color="#fff" /></View>
        <View style={styles.perfil2}>
          <View style={styles.informacao1}>
            <Text style={styles.nome }>Bold</Text>
            <Text style={styles.title }>Title: Illustration of little girl</Text>
          </View>
          <View style={styles.informacao2}>
            <View style={styles.quadrado}>
              <Text style={styles.number }>2342</Text>
              <Text style={styles.property }>Popularity</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>4736</Text>
              <Text style={styles.property }>Like</Text>
            </View>
            <View style={styles.quadrado}>
              <Text style={styles.number }>136</Text>
              <Text style={styles.property }>followed</Text>
            </View>
          </View>
        </View>
        <View style={styles.perfil3}>
          <Entypo style={styles.pontos} name="dots-three-horizontal" size={24} color="#fff" />
          <Text style={styles.rankingNumber}>8</Text>
          <Text style={styles.ranking}>Ranking</Text>
        </View>
      </View>

      
    

      
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cima: {
    backgroundColor: '#b956ea',
    height: 120, 
    width:  "100%",
    justifyContent: "center",
  },
  cima1: {
    
    height: "50%", 
    width:  "100%",
    justifyContent: "center",
    marginTop: 24,
    
  },
  cima2: {
    
    height: "40%", 
    width:  "100%",
    justifyContent: "center",
  },
  icones: {
   
    height: "50%", 
    width:  "100%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  espaco1: {
    
    height: "100%", 
    width:  "50%",
    justifyContent: "center",
  },
  espaco2: {
    
    height: "100%", 
    width:  "50%",
    alignItems: 'flex-end'
  },
  icone1: {
    marginLeft: 24,
  },
  icone2: {
    marginRight: 24
  },
  titulos: {
    
    height: "50%", 
    width:  "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  texto: { 
    fontSize: 22,
    color: '#fff',
  },
  texto2: { 
    fontSize: 17,
    color: '#fff',
  },
  quadradin: {
    height: "100%",
    width: "24%",
    justifyContent: 'center',
    
    alignItems: 'center',

    marginRight: 20,
  },
  marcacao: {
    backgroundColor: '#fff',
    height: 3,
    width: "100%",
    marginTop: 15,
    marginBottom: 5, 
  },
  perfil: {
    op1:{
      backgroundColor: '#779fea',
      height: 106,
      width: "90%", 
      margin: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
    op2:{
      backgroundColor: '#e79b5a',
      height: 106,
      width: "90%", 
      margin: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
    op3:{
      backgroundColor: '#e15671',
      height: 106,
      width: "90%", 
      margin: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
    op4:{
      backgroundColor: '#9a78e9',
      height: 106,
      width: "90%", 
      margin: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
    op5:{
      backgroundColor: '#64d9b6',
      height: 106,
      width: "90%", 
      margin: 5,
      borderRadius: 20,
      flexDirection: 'row',
    },
  },
  perfil1: {
    
    height: "100%",
    width: "27%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    marginBottom: 26,
    marginLeft: 15,
  },
  perfil2: {
    
    height: "100%",
    width: "49%", 
  },
  informacao1: {
    
    height: "65%",
    width: "100%",
    justifyContent: 'center',
  },
  informacao2: {
    
    height: "35%",
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nome: {
    color: '#fff',
    fontSize: 15,
    marginTop:10,
  },
  title: {
    color: '#fff',
    fontSize: 12,
  },
  quadrado: {
    
    height: "100%",
    width: "33%",
    flexDirection: 'column',
    alignItems: 'center',
  },
  number: {
    color: '#fff',
    fontSize: 10,
  },
  property: {
    color: '#fff',
    fontSize: 10,
  },
  perfil3: {
    
    height: "100%",
    width: "24%",
    alignItems: 'center',
  },
  pontos: {
    marginTop: 5,
    marginBottom:10,
  },
  rankingNumber: {
    color: '#fff',
    fontSize: 16,
  },
  ranking: {
    color: '#fff',
    fontSize: 11,
  },
});
