<template>
    <Page>
        <ActionBar :backgroundColor="abBackgroundColor">
            <GridLayout width="100%" columns="auto, 6*, *">
                <Label @tap="onMenuTap()" class="fa" fontSize="24" col="0">&#xf0c9;</Label>
                <Label class="title" :text="$t(title)"  col="1" fontSize="16"/>
                <Label v-if="addRoutName" @tap="onAddButtonTap()" fontSize="24" class="fa" col="2">&#xf067;</Label>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <ScrollView orientation="vertical">
                    <StackLayout>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('Home')">&#xf015; Home</label>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('ProfitList')">&#xf063; {{ $t('Profit') }}</Label>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('ExpenseList')">&#xf062; {{ $t('Expenses') }}</Label>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf07a; Planned Purchases</Label>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf00c; Budget Planning</Label>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf19c; Accounts</Label>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf0b1; Profit Categories</Label>
                        <Label class="sideLabel sideLightGrayLabel fa" @tap="onButtonTap('PlannedPurchasesList')">&#xf291; Expenses Categories</Label>
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

export default {
    data() {
        return {
            drawerOpened: false,
            title: '',
            addRoutName: '',
            abBackgroundColor: '#53ba82'
        }
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
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
        onAddButtonTap() {
            this.$router.push({ name: this.$router.currentRoute.meta.addRoutName });
        },
        onButtonTap(page) {
            this.$router.push({ name: page });
            this.onMenuTap();
            
        },
        fetchData() {
            this.title = this.$router.currentRoute.meta.title;
            this.abBackgroundColor = this.$router.currentRoute.meta.abBackgroundColor;
            this.addRoutName = this.$router.currentRoute.meta.addRoutName;
        }
    },
    mounted: function() {

        this.$router.push({ name: 'Home' });
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
    }
</style>
