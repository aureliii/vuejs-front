<template>
  <mdb-container>
    <!-- trigger modal button -->
    <mdb-btn color="default" class="mb-3" @click="coupon = true">launch modal</mdb-btn>
    <!-- cookie modal -->
    <mdb-modal :show="coupon" @close="coupon = false" removeBackdrop fullHeight position="top" success>
      <mdb-modal-body>
        <mdb-row center class="align-items-center" >
          <h2><mdb-badge>v52gs1</mdb-badge></h2>
          <p class="pt-3 mx-4">We have a gift for you! Use this code to get a
            <strong>10% discount</strong>.</p>
          <mdb-btn color="success" @click="coupon = false" icon="book" iconClass="ml-1" iconColor="white" iconRight>Get it</mdb-btn>
          <mdb-btn outline="success" @click="coupon = false">No, thanks</mdb-btn>
        </mdb-row>
      </mdb-modal-body>
    </mdb-modal>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbRow, mdbBtn, mdbModal, mdbModalBody, mdbBadge } from 'mdbvue';
  export default {
    name: 'ModalExamplesPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbBtn,
      mdbModal,
      mdbModalBody,
      mdbBadge
    },
    data() {
      return {
        coupon: false,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>
