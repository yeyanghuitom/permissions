package com.unicom.tools;

public class CharacterIsUpAndLow {
    public static String isUpAndLow(String str) throws Exception {
        char[] chars = str.toCharArray();

        for (int i = 0, length = chars.length; i < length; i++) {
            char c = chars[i];
            //判断字母是不是大写，如果是大写变为小写
            if (Character.isUpperCase(c)){
                //chars[i] = Character.toLowerCase(c);
                continue;
            }else{
                //如果为小写，变为大写
                chars[i] = Character.toUpperCase(c);
            }

        }
        String str1 = new String(chars);
        System.err.println(str1);
        return str1;
    }


}
