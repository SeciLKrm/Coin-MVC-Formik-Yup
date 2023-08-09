import * as yup from "yup"

// min 5 karakter, min 1 büyük harf, min 1 küçük harf, 1 sayı olmalı
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schema = yup.object().shape({
    email: yup 
    .string() 
    .email("Lütfen Geçerli Bir Email Giriniz") 
    .required("Zorunlu Alan"),
    age:yup 
    .number() 
    .positive() 
    .min(18,"18 Yaşından Küçükler Giremez") 
    .max(100,"100 yaşından büyükler giremez"),
    password :yup 
    .string() 
    .min(5,"şifre en az 5 karakter olmalı")
    .matches(passwordRules,"Lütfen Daha Güçlü Bir Şifre Giriniz") 
    .required("Zorunlu Alan"),
    confirmPassword:yup 
    .string() 
    .oneOf([yup .ref("password")], "Şifre Eşleşmiyor"),
    terms:yup 
    .boolean() 
    .oneOf([true],"Koşulları kabul etmek zorundasınız")
}) 