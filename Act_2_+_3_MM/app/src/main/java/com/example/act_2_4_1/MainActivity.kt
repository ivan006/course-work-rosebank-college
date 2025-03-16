package com.example.act_2_4_1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import android.widget.Switch
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    enum class Languages {
        ENGLISH,
        NDEBELE,
        PEDI,
        SOTHO,
        SWATI,
        TSONGA,
        TSWANA,
        VENDA,
        XHOSA,
        ZULU,
        AFRIKAANS
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val languageSpinner = findViewById<Spinner>(R.id.languageSpinner)
        languageSpinner.adapter = ArrayAdapter<MainActivity.Languages>(this, android.R.layout.simple_list_item_1, Languages.values())

        val clickMeButton = findViewById<Button>(R.id.clickMeButton)

        val welcomeTextView = findViewById<TextView>(R.id.welcomeTextView)
        val nameEditText = findViewById<EditText>(R.id.nameEditText)

//        val zuluSwitch = findViewById<Switch>(R.id.zuluSwitch)
//
        clickMeButton?.setOnClickListener {
            var greeting: String = ""
//            if (zuluSwitch.isChecked){
//                greeting = "Sawubona, ${nameEditText.text}"
//            } else  {
//                if (nameEditText.text.toString() == "Sam" || nameEditText.text.toString() == "Samantha"){
//                    greeting = "Yo, ${nameEditText.text}"
//                } else  {
//                    greeting = "Welcome, ${nameEditText.text}"
//                }
//            }

            var name = nameEditText.text.toString()
            var language = languageSpinner.selectedItem as Languages
            when(language){
                Languages.ZULU -> greeting = "Swaubona, $name"
                Languages.AFRIKAANS -> greeting = "More, $name"
                else -> greeting = "Greetings, $name"
            }
            welcomeTextView.text = greeting
//            Toast.makeText(this@MainActivity, "Button Clicked", Toast.LENGTH_LONG).show()



        }


    }
}