<script setup>
import { ref } from "vue";
const khoaHocs = ref([
  {
    id: 1,
    tenKhoaHoc: "Lập trình Web",
    tenGiangVien: "Nguyễn Văn A",
    soLuongHocVien: 30,
    thoiGianHoc: "3 tháng",
  },
  {
    id: 2,
    tenKhoaHoc: "Lập trình Mobile",
    tenGiangVien: "Trần Thị B",
    soLuongHocVien: 25,
    thoiGianHoc: "6 tháng",
  },
]);

const newKhoaHoc = ref({
  tenKhoaHoc: "",
  tenGiangVien: "",
  soLuongHocVien: 0,
  thoiGianHoc: "",
});

const addKhoaHoc = () => {
  khoaHocs.value.push(newKhoaHoc.value);
  alert("Them thanh cong");
};

const xoaKhoaHoc = (idKhoaHoc) => {
  const index = khoaHocs.value.findIndex((khoaHoc) => khoaHoc.id === idKhoaHoc);
  if (index > -1) {
    khoaHocs.value.splice(index, 1);
  }
  alert("Xoa thanh cong");
};

const refresh = () => {
  newKhoaHoc.value = {
    tenKhoaHoc: "",
    tenGiangVien: "",
    soLuongHocVien: 0,
    thoiGianHoc: "",
  };
};
</script>

<template>
  <!-- Form thêm khóa học -->
  <div class="mb-4">
    <h5>Thêm Khóa Học</h5>
    <form @submit.prevent="addKhoaHoc">
      <div class="mb-3">
        <label for="tenKhoaHoc" class="form-label">Tên Khóa Học</label>
        <input
          v-model="newKhoaHoc.tenKhoaHoc"
          type="text"
          id="tenKhoaHoc"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="tenGiangVien" class="form-label">Tên Giảng Viên</label>
        <input
          v-model="newKhoaHoc.tenGiangVien"
          type="text"
          id="tenGiangVien"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="soLuongHocVien" class="form-label">Số Lượng Học Viên</label>
        <input
          v-model="newKhoaHoc.soLuongHocVien"
          type="number"
          id="soLuongHocVien"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="thoiGianHoc" class="form-label">Thời Gian Học</label>
        <select
          v-model="newKhoaHoc.thoiGianHoc"
          id="thoiGianHoc"
          class="form-control"
          required
        >
          <option value="">Chọn thời gian học</option>
          <option value="3 tháng">3 tháng</option>
          <option value="6 tháng">6 tháng</option>
          <option value="9 tháng">9 tháng</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Thêm Khóa Học</button>
    </form>
  </div>

  <div class="container py-3">
    <h3 class="text-center mb-4">Danh Sách Khóa Học</h3>
    <table class="table table-bordered table-hover">
      <thead class="table-primary">
        <tr>
          <th>#</th>
          <th>Tên Khóa Học</th>
          <th>Tên Giảng Viên</th>
          <th>Số Lượng Học Viên</th>
          <th>Thời Gian Học</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(khoaHoc, index) in khoaHocs" :key="khoaHoc.id">
          <td>{{ index + 1 }}</td>
          <td>{{ khoaHoc.tenKhoaHoc }}</td>
          <td>{{ khoaHoc.tenGiangVien }}</td>
          <td>{{ khoaHoc.soLuongHocVien }}</td>
          <td>{{ khoaHoc.thoiGianHoc }}</td>
          <td>
            <button class="btn btn-danger" @click="xoaKhoaHoc(khoaHoc.id)">
              Xóa khóa học
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
