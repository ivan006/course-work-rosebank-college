package com.example.act_3_arc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var birthdate = 26

        birthdate = birthdate + 10
        birthdate = birthdate * 3
        birthdate = birthdate - 5
        birthdate = birthdate / 2

        Log.d("birthdate", birthdate.toString())
    }
}