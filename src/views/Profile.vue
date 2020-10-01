<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-header__gradient"></div>
      <div class="profile-header__image">
        <div class="profile-header__imgage-icon">
          <div class="image"></div>
          <!-- <b-icon icon="exclamation-circle-fill" style="width: 120px; height: 120px;"></b-icon> -->
        </div>
      </div>
    </div>
    <div class="py-3"></div>

    <div class="user-profile">
      <div class="portion-1">
        <b-card class="rounded-pill bg-white text">Andrea Jolly</b-card>
      </div>
      <div class="portion-2">
        <div class="text-white">WALLET BALANCE</div>
        <div class="text-white">NGN800,333.00</div>
      </div>
      <div class="portion-3">
        <b-card class="rounded bg-white py-3 px-4 text">
          <div>BTC 0.00</div>
          <p>NGN 0.00</p>
        </b-card>
        <b-card class="bg-white text">
          <div>ETH 0.00</div>
          <p>NGN 0.00</p>
        </b-card>
      </div>
      <div class="portion-4"></div>
    </div>

    <div class="py-3"></div>

    <div class="user">
      <b-card class="user-details text-white text-left">User Detail</b-card>
      <b-card class="user-name">
        <div class="row">
          <div class="text text-left col-3">Name</div>
          <div class="text text-left col-9">Andrea Jolly</div>
        </div>
      </b-card>
      <b-card class="user-email">
        <div class="row">
          <div class="text text-left col-3">Email</div>
          <div class="text text-left col-7">andrea_jolly@domain.com</div>
          <b-button pill class="col-2 pending bg-white" variant="outline-white" size="sm">Pending Verification</b-button>
        </div>
      </b-card>
      <b-card class="user-bank">
        <div class="row">
          <div class="text text-left col-3">Bank Name:</div>
          <div class="text text-left col-3">..................</div>
          <div class="text text-left col-4">Acc. No. xxxxxxxx</div>
          <b-button pill class="col-2 verified" variant="outline-white" size="sm">Verified</b-button>
        </div>
      </b-card>
      <b-card class="user-mobile">
        <div class="row">
          <div class="text text-left col-3">Mobile No.:</div>
          <div class="text text-left col-7">XXX-XXX-XXX-XXXX</div>
          <b-button pill class="col-2 verified" variant="outline-white" size="sm">Verified</b-button>
        </div>
      </b-card>
      <b-card class="user-status">
        <div class="row">
          <div class="text text-left col-3">Status</div>
          <div class="text text-left col-9">Active</div>
        </div>
      </b-card>
    </div>
    <div class="py-3"></div>
    <div>
      <b-card class="upload">
        <div class="row">
          <b-button pill class="col-1 upload-id bg-white ml-5" variant="outline-white" size="sm">UPLOAD I.D</b-button>
        </div>
      </b-card>
    </div>

    <div class="py-3"></div>

    <div>
      <b-card class="upload bg-white">
        <div class="row">
          <div class="text text-left col-2">
            <div>LTC <span class="ngn">/NGN</span></div>
            <div>15,688.91NGN</div>
          </div>
          <div class="text text-left col-2">
            <div>ETH <span class="ngn">/NGN</span></div>
            <div>55,038.47NGN</div>
          </div>
          <div class="text text-left col-2">
            <div>XRP <span class="ngn">/NGN</span></div>
            <div>66.3NGN</div>
          </div>
          <div class="text text-left col-2">
            <div>USDT <span class="ngn">/NGN</span></div>
            <div>416.97NGN</div>
          </div>
          <div class="text text-left col-2">
            <div>BTC <span class="ngn">/NGN</span></div>
            <div>2,593,012.00NGN</div>
          </div>
          <div class="text text-left col-2">
            <div>DASH <span class="ngn">/NGN</span></div>
            <div>27,376.15NGN</div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang='scss' scoped>
.ngn{
  color:  #C4C4C4;
}
.portion-1{
  height: 170px;
}
.portion-2{
  background: rgba(0, 0, 112, 0.54);
  height: 130px;
}
.portion-3{
  height: 150px;
}
.portion-4{
  background: #21B8C7;
  height: 100px;
}
.user-profile{
  width: 20%;
  height: 550px;
  background: #C4C4C4;
}
.user{
  width: 70%;
}
.upload{
  background: #00B9CD;
  width: 70%;
}
.upload-id{
  color: #000070;
}
.user-status{
  background: #F7F7F7;
}
.user-mobile{
  background: #E4E4E4;
}
.pending{
  color: #FF001F;
}
.verified{
  color: #00B9CD;
  background: white;
}
.user-bank{
  background: #F7F7F7;
}
.profile {
}
.profile-header {
  // background-color: linear-gradient(180deg, rgba(0, 0, 112, 0.7) 0%, rgba(0, 0, 112, 0) 100%);
  background: rgba(0, 0, 112, 0.75);
  height: 200px;
}
.profile-header__gradient {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 112, 0.7) 0%,
    rgba(0, 0, 112, 0) 100%
  );
  height: 100px;
}
.image {
  // background: url(pam-sharpe-yvGEvJUpMyM-unsplash.jpg);
  width: 273px;
  height: 260px;

  //   background: url(src/assets/images/20130319_083314_1174_admin.png);
  border-radius: 200px;
}
.user-details {
  background: #00b9cd;
}
.user-name {
  background: #f7f7f7;
}
.text {
  color: #000070;
}
.user-email{
  background: #E4E4E4;
}
</style>