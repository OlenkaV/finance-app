<template>
    <StackLayout ref="page">
        <ScrollView>
            <RadListView for="item in listOfItems">
                <v-template>
                  <GridLayout columns="4*, 2*, 2*" rows="38, *">
                    <Label class="list-item" col="0" :text="item.comment"></Label>
                    <Label class="list-item" col="1" :text="item.price+' UAH'"></Label>
                    <Label class="list-item" col="2" :text="item.date"></Label>
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
    name: 'Expense',
    data() {
        return {
            
        }
    },
    computed: {
        listOfItems() {
            return this.$store.state.expense.list;
        }
    },
    mounted() {
        this.$store.dispatch('expense/fetchAll');
    },
    methods: {
        submit() {
            
        },
        chooseCategory() {
            var _this = this;
            action("Choose Category", "Cancel", this.categories)
            .then(result => {
                _this.profit.category = result;
            })
        },
        chooseAccount() {
            var _this = this;
            action("Choose Account", "Cancel", this.accounts)
            .then(result => {
                _this.profit.account = result;
            })
        }
    }
}
</script>