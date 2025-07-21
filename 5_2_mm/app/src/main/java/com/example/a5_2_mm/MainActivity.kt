package com.example.a5_2_mm

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {

    // Teams from https://footballdatabase.com/ranking/south-africa/1
    // retrieved on 21 May 2022
    val teams = arrayOf<String>("Mamelodi Sundowns FC",
        "Bidvest Wits",
        "Orlando Pirates",
        "Kaizer Chiefs",
        "Cape Town City FC")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}


