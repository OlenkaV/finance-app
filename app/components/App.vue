<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label @tap="onMenuTap()" class="fa" fontSize="24" col="0">&#xf0c9;</Label>
                <Label class="title" text="Welcome to Home Accounts"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <ScrollView orientation="vertical">
                    <StackLayout>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('Home')">&#xf015; Home</label>

                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('ProfitList')">&#xf063; Profit</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('ProfitList')">&#xf0ca; List</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('Profit')">&#xf067; Add</Label>

                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('ExpenseList')">&#xf062; Expense</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('ExpenseList')">&#xf0ca; List</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('Expense')">&#xf067; Add</Label>

                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf07a; Planned Purchases</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf0ca; List</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('PlannedPurchases')">&#xf067; Add</Label>

                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf00c; Budget Planning</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf0ca; List</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('PlannedPurchases')">&#xf067; Add</Label>

                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf19c; Accounts</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf0ca; List</Label>
                        <Label class="sideLabel fa" @tap="onButtonTap('PlannedPurchases')">&#xf067; Add</Label>
                    </StackLayout>
                </ScrollView>
            </StackLayout>         

            <GridLayout ~mainContent columns="*" rows="*">
                <StackLayout class="main-container" ~mainContent>
                    <router-view></router-view>
                </StackLayout>
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
import router from '../router/index'

export default {
    data() {
        return {
            drawerOpened: false
        }
    },
    components: {
        
    },
    methods: {
        onMenuTap() {
            if(!this.drawerOpened) {
                this.$refs.drawer.nativeView.showDrawer()
                this.drawerOpened = true;
            }
            else {
                this.$refs.drawer.nativeView.closeDrawer();
                this.drawerOpened = false;
            }
        },
        onButtonTap(page) {
            router.push({ name: page });
            this.onMenuTap();
        }
    },
    mounted: function() {

        router.push({ name: 'Home' });
    }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .sideLabel {
        margin: 0 20;
        padding: 16 16;
        color: #333333;
        font-size: 16;
        border-bottom: 1 solid;
        border-bottom-color: #ccc;
    }
    .sideLightGrayLabel {
        margin: 0 0;
        background-color: #eee;
    }
</style>
