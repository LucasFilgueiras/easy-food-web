<template>
  <header>
    <TitleComponent />
  </header>
  <main>
    <div class="bg-yellow mb-5 d-flex justify-space-between align-center">
      <h3 class="ml-5">Cardápio: <span id="nameMenu">{{ menu?.NOMECARDAPIO }}</span></h3>
      <small class="mr-5"><strong>Validade: <span id="validityMenu">{{ menu?.VALIDADECARDAPIO }}</span></strong></small>
    </div>
    <div id="productsMenu">
      <div
        v-for="product in productsMenu"
        :key="product.IDPRODUTO"
        class="mx-5 mb-2 d-flex justify-space-between border rounded-lg pa-2"
      >
        <div class="d-flex flex-column">
          <strong>{{ product.NOMEPRODUTO }}</strong>
          <small>{{ product.DESCRICAOPRODUTO }}</small>
        </div>
        <strong>{{ formatPrice(parseFloat(product.PRECOPRODUTO)) }}</strong>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import TitleComponent from '../components/TitleComponent.vue';
import axios from 'axios';
import type { IMenu, IProductsMenu } from '../interfaces/interfaces';
import { formatPrice } from '../utils/formatPrice';

const productsMenu = ref<IProductsMenu[]>([]);
const menu = ref<IMenu>();

const fetchProductsMenu = async () => {
  try {
    const fetchProductsMenu = await axios.get("http://localhost:9000/cardapio/produtos/1");
    if(fetchProductsMenu) productsMenu.value = fetchProductsMenu.data;
    console.log(fetchProductsMenu.data)
  } catch (error) {
    console.error(error);
    window.alert("Não foi possível carregar as informações dos produtos do cardápio");
  }
}

const fetchMenu = async () => {
  try {
    const fetchMenu = await axios.get("http://localhost:9000/cardapio/1");
    if(fetchMenu) menu.value = fetchMenu.data;
  } catch (error) {
    console.error(error);
    window.alert("Não foi possível carregar as informações do cardápio");
  }
}

onMounted(fetchProductsMenu);
onMounted(fetchMenu);
</script>
