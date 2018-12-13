<template>
    <StackLayout ref="page">
        <ScrollView>
            <RadListView for="item in listOfItems">
                <v-template>
                    <GridLayout columns="4*, 2*, 1*" rows="38, *">
                        <Label class="list-item" col="0" :text="item.title"></Label>
                        <Label class="list-item" col="1" :text="item.price+' UAH'"></Label>
                        
                        <Label class="list-item fa" style="color: #37A000; font-size:18;" col="2">
                            <Button text="1"/>&#xf00c;</Button>
                        </Label>
                    </GridLayout>
                </v-template>
            </RadListView>
        </ScrollView>
    </StackLayout>
</template>

<script>
import Vue from 'nativescript-vue';
import RadListView from 'nativescript-ui-listview/vue';


Vue.use(RadListView);

export default {
    name: 'PlannedPurchasesList',
    data() {
        return {
            myCheckedProp: false
        }
    },
    computed: {
        listOfItems() {
            return this.$store.state.plannedPurchase.list;
        }
    },
    mounted() {
        this.$store.dispatch('plannedPurchase/fetchAll');
    },
    methods: {
        
    }
}
</script>

<style>

</style>