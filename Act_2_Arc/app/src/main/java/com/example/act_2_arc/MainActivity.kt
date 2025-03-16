package com.example.act_2_arc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val name = "ivan"

        Log.d("name", name)

        val pets = 0

        Log.d("pets", pets.toString())

    }
}